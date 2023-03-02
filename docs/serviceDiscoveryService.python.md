# `serviceDiscoveryService` Submodule <a name="`serviceDiscoveryService` Submodule" id="@cdktf/provider-aws.serviceDiscoveryService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceDiscoveryService <a name="ServiceDiscoveryService" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service aws_service_discovery_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import service_discovery_service

serviceDiscoveryService.ServiceDiscoveryService(
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
  description: str = None,
  dns_config: ServiceDiscoveryServiceDnsConfig = None,
  force_destroy: typing.Union[bool, IResolvable] = None,
  health_check_config: ServiceDiscoveryServiceHealthCheckConfig = None,
  health_check_custom_config: ServiceDiscoveryServiceHealthCheckCustomConfig = None,
  id: str = None,
  namespace_id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#name ServiceDiscoveryService#name}. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#description ServiceDiscoveryService#description}. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.Initializer.parameter.dnsConfig">dns_config</a></code> | <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfig">ServiceDiscoveryServiceDnsConfig</a></code> | dns_config block. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.Initializer.parameter.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#force_destroy ServiceDiscoveryService#force_destroy}. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.Initializer.parameter.healthCheckConfig">health_check_config</a></code> | <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfig">ServiceDiscoveryServiceHealthCheckConfig</a></code> | health_check_config block. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.Initializer.parameter.healthCheckCustomConfig">health_check_custom_config</a></code> | <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfig">ServiceDiscoveryServiceHealthCheckCustomConfig</a></code> | health_check_custom_config block. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#id ServiceDiscoveryService#id}. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.Initializer.parameter.namespaceId">namespace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#namespace_id ServiceDiscoveryService#namespace_id}. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#tags ServiceDiscoveryService#tags}. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#tags_all ServiceDiscoveryService#tags_all}. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#type ServiceDiscoveryService#type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#name ServiceDiscoveryService#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#description ServiceDiscoveryService#description}.

---

##### `dns_config`<sup>Optional</sup> <a name="dns_config" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.Initializer.parameter.dnsConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfig">ServiceDiscoveryServiceDnsConfig</a>

dns_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#dns_config ServiceDiscoveryService#dns_config}

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.Initializer.parameter.forceDestroy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#force_destroy ServiceDiscoveryService#force_destroy}.

---

##### `health_check_config`<sup>Optional</sup> <a name="health_check_config" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.Initializer.parameter.healthCheckConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfig">ServiceDiscoveryServiceHealthCheckConfig</a>

health_check_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#health_check_config ServiceDiscoveryService#health_check_config}

---

##### `health_check_custom_config`<sup>Optional</sup> <a name="health_check_custom_config" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.Initializer.parameter.healthCheckCustomConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfig">ServiceDiscoveryServiceHealthCheckCustomConfig</a>

health_check_custom_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#health_check_custom_config ServiceDiscoveryService#health_check_custom_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#id ServiceDiscoveryService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace_id`<sup>Optional</sup> <a name="namespace_id" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.Initializer.parameter.namespaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#namespace_id ServiceDiscoveryService#namespace_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#tags ServiceDiscoveryService#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#tags_all ServiceDiscoveryService#tags_all}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#type ServiceDiscoveryService#type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.putDnsConfig">put_dns_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.putHealthCheckConfig">put_health_check_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.putHealthCheckCustomConfig">put_health_check_custom_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.resetDnsConfig">reset_dns_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.resetForceDestroy">reset_force_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.resetHealthCheckConfig">reset_health_check_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.resetHealthCheckCustomConfig">reset_health_check_custom_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.resetNamespaceId">reset_namespace_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_dns_config` <a name="put_dns_config" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.putDnsConfig"></a>

```python
def put_dns_config(
  dns_records: typing.Union[IResolvable, typing.List[ServiceDiscoveryServiceDnsConfigDnsRecords]],
  namespace_id: str,
  routing_policy: str = None
) -> None
```

###### `dns_records`<sup>Required</sup> <a name="dns_records" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.putDnsConfig.parameter.dnsRecords"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecords">ServiceDiscoveryServiceDnsConfigDnsRecords</a>]]

dns_records block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#dns_records ServiceDiscoveryService#dns_records}

---

###### `namespace_id`<sup>Required</sup> <a name="namespace_id" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.putDnsConfig.parameter.namespaceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#namespace_id ServiceDiscoveryService#namespace_id}.

---

###### `routing_policy`<sup>Optional</sup> <a name="routing_policy" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.putDnsConfig.parameter.routingPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#routing_policy ServiceDiscoveryService#routing_policy}.

---

##### `put_health_check_config` <a name="put_health_check_config" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.putHealthCheckConfig"></a>

```python
def put_health_check_config(
  failure_threshold: typing.Union[int, float] = None,
  resource_path: str = None,
  type: str = None
) -> None
```

###### `failure_threshold`<sup>Optional</sup> <a name="failure_threshold" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.putHealthCheckConfig.parameter.failureThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#failure_threshold ServiceDiscoveryService#failure_threshold}.

---

###### `resource_path`<sup>Optional</sup> <a name="resource_path" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.putHealthCheckConfig.parameter.resourcePath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#resource_path ServiceDiscoveryService#resource_path}.

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.putHealthCheckConfig.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#type ServiceDiscoveryService#type}.

---

##### `put_health_check_custom_config` <a name="put_health_check_custom_config" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.putHealthCheckCustomConfig"></a>

```python
def put_health_check_custom_config(
  failure_threshold: typing.Union[int, float] = None
) -> None
```

###### `failure_threshold`<sup>Optional</sup> <a name="failure_threshold" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.putHealthCheckCustomConfig.parameter.failureThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#failure_threshold ServiceDiscoveryService#failure_threshold}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_dns_config` <a name="reset_dns_config" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.resetDnsConfig"></a>

```python
def reset_dns_config() -> None
```

##### `reset_force_destroy` <a name="reset_force_destroy" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.resetForceDestroy"></a>

```python
def reset_force_destroy() -> None
```

##### `reset_health_check_config` <a name="reset_health_check_config" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.resetHealthCheckConfig"></a>

```python
def reset_health_check_config() -> None
```

##### `reset_health_check_custom_config` <a name="reset_health_check_custom_config" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.resetHealthCheckCustomConfig"></a>

```python
def reset_health_check_custom_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_namespace_id` <a name="reset_namespace_id" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.resetNamespaceId"></a>

```python
def reset_namespace_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import service_discovery_service

serviceDiscoveryService.ServiceDiscoveryService.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import service_discovery_service

serviceDiscoveryService.ServiceDiscoveryService.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import service_discovery_service

serviceDiscoveryService.ServiceDiscoveryService.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.dnsConfig">dns_config</a></code> | <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference">ServiceDiscoveryServiceDnsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.healthCheckConfig">health_check_config</a></code> | <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference">ServiceDiscoveryServiceHealthCheckConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.healthCheckCustomConfig">health_check_custom_config</a></code> | <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference">ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.dnsConfigInput">dns_config_input</a></code> | <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfig">ServiceDiscoveryServiceDnsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.forceDestroyInput">force_destroy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.healthCheckConfigInput">health_check_config_input</a></code> | <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfig">ServiceDiscoveryServiceHealthCheckConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.healthCheckCustomConfigInput">health_check_custom_config_input</a></code> | <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfig">ServiceDiscoveryServiceHealthCheckCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.namespaceIdInput">namespace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.namespaceId">namespace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `dns_config`<sup>Required</sup> <a name="dns_config" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.dnsConfig"></a>

```python
dns_config: ServiceDiscoveryServiceDnsConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference">ServiceDiscoveryServiceDnsConfigOutputReference</a>

---

##### `health_check_config`<sup>Required</sup> <a name="health_check_config" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.healthCheckConfig"></a>

```python
health_check_config: ServiceDiscoveryServiceHealthCheckConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference">ServiceDiscoveryServiceHealthCheckConfigOutputReference</a>

---

##### `health_check_custom_config`<sup>Required</sup> <a name="health_check_custom_config" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.healthCheckCustomConfig"></a>

```python
health_check_custom_config: ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference">ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `dns_config_input`<sup>Optional</sup> <a name="dns_config_input" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.dnsConfigInput"></a>

```python
dns_config_input: ServiceDiscoveryServiceDnsConfig
```

- *Type:* <a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfig">ServiceDiscoveryServiceDnsConfig</a>

---

##### `force_destroy_input`<sup>Optional</sup> <a name="force_destroy_input" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.forceDestroyInput"></a>

```python
force_destroy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `health_check_config_input`<sup>Optional</sup> <a name="health_check_config_input" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.healthCheckConfigInput"></a>

```python
health_check_config_input: ServiceDiscoveryServiceHealthCheckConfig
```

- *Type:* <a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfig">ServiceDiscoveryServiceHealthCheckConfig</a>

---

##### `health_check_custom_config_input`<sup>Optional</sup> <a name="health_check_custom_config_input" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.healthCheckCustomConfigInput"></a>

```python
health_check_custom_config_input: ServiceDiscoveryServiceHealthCheckCustomConfig
```

- *Type:* <a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfig">ServiceDiscoveryServiceHealthCheckCustomConfig</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_id_input`<sup>Optional</sup> <a name="namespace_id_input" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.namespaceIdInput"></a>

```python
namespace_id_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `force_destroy`<sup>Required</sup> <a name="force_destroy" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.forceDestroy"></a>

```python
force_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace_id`<sup>Required</sup> <a name="namespace_id" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.namespaceId"></a>

```python
namespace_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryService.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceDiscoveryServiceConfig <a name="ServiceDiscoveryServiceConfig" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import service_discovery_service

serviceDiscoveryService.ServiceDiscoveryServiceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  description: str = None,
  dns_config: ServiceDiscoveryServiceDnsConfig = None,
  force_destroy: typing.Union[bool, IResolvable] = None,
  health_check_config: ServiceDiscoveryServiceHealthCheckConfig = None,
  health_check_custom_config: ServiceDiscoveryServiceHealthCheckCustomConfig = None,
  id: str = None,
  namespace_id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#name ServiceDiscoveryService#name}. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#description ServiceDiscoveryService#description}. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.dnsConfig">dns_config</a></code> | <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfig">ServiceDiscoveryServiceDnsConfig</a></code> | dns_config block. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#force_destroy ServiceDiscoveryService#force_destroy}. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.healthCheckConfig">health_check_config</a></code> | <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfig">ServiceDiscoveryServiceHealthCheckConfig</a></code> | health_check_config block. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.healthCheckCustomConfig">health_check_custom_config</a></code> | <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfig">ServiceDiscoveryServiceHealthCheckCustomConfig</a></code> | health_check_custom_config block. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#id ServiceDiscoveryService#id}. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.namespaceId">namespace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#namespace_id ServiceDiscoveryService#namespace_id}. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#tags ServiceDiscoveryService#tags}. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#tags_all ServiceDiscoveryService#tags_all}. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#type ServiceDiscoveryService#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#name ServiceDiscoveryService#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#description ServiceDiscoveryService#description}.

---

##### `dns_config`<sup>Optional</sup> <a name="dns_config" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.dnsConfig"></a>

```python
dns_config: ServiceDiscoveryServiceDnsConfig
```

- *Type:* <a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfig">ServiceDiscoveryServiceDnsConfig</a>

dns_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#dns_config ServiceDiscoveryService#dns_config}

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.forceDestroy"></a>

```python
force_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#force_destroy ServiceDiscoveryService#force_destroy}.

---

##### `health_check_config`<sup>Optional</sup> <a name="health_check_config" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.healthCheckConfig"></a>

```python
health_check_config: ServiceDiscoveryServiceHealthCheckConfig
```

- *Type:* <a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfig">ServiceDiscoveryServiceHealthCheckConfig</a>

health_check_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#health_check_config ServiceDiscoveryService#health_check_config}

---

##### `health_check_custom_config`<sup>Optional</sup> <a name="health_check_custom_config" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.healthCheckCustomConfig"></a>

```python
health_check_custom_config: ServiceDiscoveryServiceHealthCheckCustomConfig
```

- *Type:* <a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfig">ServiceDiscoveryServiceHealthCheckCustomConfig</a>

health_check_custom_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#health_check_custom_config ServiceDiscoveryService#health_check_custom_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#id ServiceDiscoveryService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespace_id`<sup>Optional</sup> <a name="namespace_id" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.namespaceId"></a>

```python
namespace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#namespace_id ServiceDiscoveryService#namespace_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#tags ServiceDiscoveryService#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#tags_all ServiceDiscoveryService#tags_all}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#type ServiceDiscoveryService#type}.

---

### ServiceDiscoveryServiceDnsConfig <a name="ServiceDiscoveryServiceDnsConfig" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import service_discovery_service

serviceDiscoveryService.ServiceDiscoveryServiceDnsConfig(
  dns_records: typing.Union[IResolvable, typing.List[ServiceDiscoveryServiceDnsConfigDnsRecords]],
  namespace_id: str,
  routing_policy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfig.property.dnsRecords">dns_records</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecords">ServiceDiscoveryServiceDnsConfigDnsRecords</a>]]</code> | dns_records block. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfig.property.namespaceId">namespace_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#namespace_id ServiceDiscoveryService#namespace_id}. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfig.property.routingPolicy">routing_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#routing_policy ServiceDiscoveryService#routing_policy}. |

---

##### `dns_records`<sup>Required</sup> <a name="dns_records" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfig.property.dnsRecords"></a>

```python
dns_records: typing.Union[IResolvable, typing.List[ServiceDiscoveryServiceDnsConfigDnsRecords]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecords">ServiceDiscoveryServiceDnsConfigDnsRecords</a>]]

dns_records block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#dns_records ServiceDiscoveryService#dns_records}

---

##### `namespace_id`<sup>Required</sup> <a name="namespace_id" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfig.property.namespaceId"></a>

```python
namespace_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#namespace_id ServiceDiscoveryService#namespace_id}.

---

##### `routing_policy`<sup>Optional</sup> <a name="routing_policy" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfig.property.routingPolicy"></a>

```python
routing_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#routing_policy ServiceDiscoveryService#routing_policy}.

---

### ServiceDiscoveryServiceDnsConfigDnsRecords <a name="ServiceDiscoveryServiceDnsConfigDnsRecords" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecords.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import service_discovery_service

serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecords(
  ttl: typing.Union[int, float],
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecords.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#ttl ServiceDiscoveryService#ttl}. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecords.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#type ServiceDiscoveryService#type}. |

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecords.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#ttl ServiceDiscoveryService#ttl}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecords.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#type ServiceDiscoveryService#type}.

---

### ServiceDiscoveryServiceHealthCheckConfig <a name="ServiceDiscoveryServiceHealthCheckConfig" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import service_discovery_service

serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfig(
  failure_threshold: typing.Union[int, float] = None,
  resource_path: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfig.property.failureThreshold">failure_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#failure_threshold ServiceDiscoveryService#failure_threshold}. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfig.property.resourcePath">resource_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#resource_path ServiceDiscoveryService#resource_path}. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#type ServiceDiscoveryService#type}. |

---

##### `failure_threshold`<sup>Optional</sup> <a name="failure_threshold" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfig.property.failureThreshold"></a>

```python
failure_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#failure_threshold ServiceDiscoveryService#failure_threshold}.

---

##### `resource_path`<sup>Optional</sup> <a name="resource_path" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfig.property.resourcePath"></a>

```python
resource_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#resource_path ServiceDiscoveryService#resource_path}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#type ServiceDiscoveryService#type}.

---

### ServiceDiscoveryServiceHealthCheckCustomConfig <a name="ServiceDiscoveryServiceHealthCheckCustomConfig" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import service_discovery_service

serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfig(
  failure_threshold: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfig.property.failureThreshold">failure_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#failure_threshold ServiceDiscoveryService#failure_threshold}. |

---

##### `failure_threshold`<sup>Optional</sup> <a name="failure_threshold" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfig.property.failureThreshold"></a>

```python
failure_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service#failure_threshold ServiceDiscoveryService#failure_threshold}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceDiscoveryServiceDnsConfigDnsRecordsList <a name="ServiceDiscoveryServiceDnsConfigDnsRecordsList" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import service_discovery_service

serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecords">ServiceDiscoveryServiceDnsConfigDnsRecords</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ServiceDiscoveryServiceDnsConfigDnsRecords]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecords">ServiceDiscoveryServiceDnsConfigDnsRecords</a>]]

---


### ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference <a name="ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import service_discovery_service

serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.property.ttlInput">ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecords">ServiceDiscoveryServiceDnsConfigDnsRecords</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.property.ttlInput"></a>

```python
ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ServiceDiscoveryServiceDnsConfigDnsRecords, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecords">ServiceDiscoveryServiceDnsConfigDnsRecords</a>, cdktf.IResolvable]

---


### ServiceDiscoveryServiceDnsConfigOutputReference <a name="ServiceDiscoveryServiceDnsConfigOutputReference" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import service_discovery_service

serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.putDnsRecords">put_dns_records</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.resetRoutingPolicy">reset_routing_policy</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dns_records` <a name="put_dns_records" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.putDnsRecords"></a>

```python
def put_dns_records(
  value: typing.Union[IResolvable, typing.List[ServiceDiscoveryServiceDnsConfigDnsRecords]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.putDnsRecords.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecords">ServiceDiscoveryServiceDnsConfigDnsRecords</a>]]

---

##### `reset_routing_policy` <a name="reset_routing_policy" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.resetRoutingPolicy"></a>

```python
def reset_routing_policy() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.property.dnsRecords">dns_records</a></code> | <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList">ServiceDiscoveryServiceDnsConfigDnsRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.property.dnsRecordsInput">dns_records_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecords">ServiceDiscoveryServiceDnsConfigDnsRecords</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.property.namespaceIdInput">namespace_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.property.routingPolicyInput">routing_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.property.namespaceId">namespace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.property.routingPolicy">routing_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfig">ServiceDiscoveryServiceDnsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_records`<sup>Required</sup> <a name="dns_records" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.property.dnsRecords"></a>

```python
dns_records: ServiceDiscoveryServiceDnsConfigDnsRecordsList
```

- *Type:* <a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecordsList">ServiceDiscoveryServiceDnsConfigDnsRecordsList</a>

---

##### `dns_records_input`<sup>Optional</sup> <a name="dns_records_input" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.property.dnsRecordsInput"></a>

```python
dns_records_input: typing.Union[IResolvable, typing.List[ServiceDiscoveryServiceDnsConfigDnsRecords]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigDnsRecords">ServiceDiscoveryServiceDnsConfigDnsRecords</a>]]

---

##### `namespace_id_input`<sup>Optional</sup> <a name="namespace_id_input" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.property.namespaceIdInput"></a>

```python
namespace_id_input: str
```

- *Type:* str

---

##### `routing_policy_input`<sup>Optional</sup> <a name="routing_policy_input" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.property.routingPolicyInput"></a>

```python
routing_policy_input: str
```

- *Type:* str

---

##### `namespace_id`<sup>Required</sup> <a name="namespace_id" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.property.namespaceId"></a>

```python
namespace_id: str
```

- *Type:* str

---

##### `routing_policy`<sup>Required</sup> <a name="routing_policy" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.property.routingPolicy"></a>

```python
routing_policy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfigOutputReference.property.internalValue"></a>

```python
internal_value: ServiceDiscoveryServiceDnsConfig
```

- *Type:* <a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceDnsConfig">ServiceDiscoveryServiceDnsConfig</a>

---


### ServiceDiscoveryServiceHealthCheckConfigOutputReference <a name="ServiceDiscoveryServiceHealthCheckConfigOutputReference" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import service_discovery_service

serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.resetFailureThreshold">reset_failure_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.resetResourcePath">reset_resource_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_failure_threshold` <a name="reset_failure_threshold" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.resetFailureThreshold"></a>

```python
def reset_failure_threshold() -> None
```

##### `reset_resource_path` <a name="reset_resource_path" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.resetResourcePath"></a>

```python
def reset_resource_path() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.property.failureThresholdInput">failure_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.property.resourcePathInput">resource_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.property.failureThreshold">failure_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.property.resourcePath">resource_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfig">ServiceDiscoveryServiceHealthCheckConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `failure_threshold_input`<sup>Optional</sup> <a name="failure_threshold_input" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.property.failureThresholdInput"></a>

```python
failure_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_path_input`<sup>Optional</sup> <a name="resource_path_input" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.property.resourcePathInput"></a>

```python
resource_path_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `failure_threshold`<sup>Required</sup> <a name="failure_threshold" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.property.failureThreshold"></a>

```python
failure_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_path`<sup>Required</sup> <a name="resource_path" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.property.resourcePath"></a>

```python
resource_path: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfigOutputReference.property.internalValue"></a>

```python
internal_value: ServiceDiscoveryServiceHealthCheckConfig
```

- *Type:* <a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckConfig">ServiceDiscoveryServiceHealthCheckConfig</a>

---


### ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference <a name="ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import service_discovery_service

serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.resetFailureThreshold">reset_failure_threshold</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_failure_threshold` <a name="reset_failure_threshold" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.resetFailureThreshold"></a>

```python
def reset_failure_threshold() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.property.failureThresholdInput">failure_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.property.failureThreshold">failure_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfig">ServiceDiscoveryServiceHealthCheckCustomConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `failure_threshold_input`<sup>Optional</sup> <a name="failure_threshold_input" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.property.failureThresholdInput"></a>

```python
failure_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `failure_threshold`<sup>Required</sup> <a name="failure_threshold" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.property.failureThreshold"></a>

```python
failure_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference.property.internalValue"></a>

```python
internal_value: ServiceDiscoveryServiceHealthCheckCustomConfig
```

- *Type:* <a href="#@cdktf/provider-aws.serviceDiscoveryService.ServiceDiscoveryServiceHealthCheckCustomConfig">ServiceDiscoveryServiceHealthCheckCustomConfig</a>

---



