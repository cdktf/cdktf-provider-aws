# `alb` Submodule <a name="`alb` Submodule" id="@cdktf/provider-aws.alb"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Alb <a name="Alb" id="@cdktf/provider-aws.alb.Alb"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/alb aws_alb}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.alb.Alb.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb

alb.Alb(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access_logs: AlbAccessLogs = None,
  customer_owned_ipv4_pool: str = None,
  desync_mitigation_mode: str = None,
  drop_invalid_header_fields: typing.Union[bool, IResolvable] = None,
  enable_cross_zone_load_balancing: typing.Union[bool, IResolvable] = None,
  enable_deletion_protection: typing.Union[bool, IResolvable] = None,
  enable_http2: typing.Union[bool, IResolvable] = None,
  enable_waf_fail_open: typing.Union[bool, IResolvable] = None,
  id: str = None,
  idle_timeout: typing.Union[int, float] = None,
  internal: typing.Union[bool, IResolvable] = None,
  ip_address_type: str = None,
  load_balancer_type: str = None,
  name: str = None,
  name_prefix: str = None,
  preserve_host_header: typing.Union[bool, IResolvable] = None,
  security_groups: typing.List[str] = None,
  subnet_mapping: typing.Union[IResolvable, typing.List[AlbSubnetMapping]] = None,
  subnets: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: AlbTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.accessLogs">access_logs</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogs">AlbAccessLogs</a></code> | access_logs block. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.customerOwnedIpv4Pool">customer_owned_ipv4_pool</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#customer_owned_ipv4_pool Alb#customer_owned_ipv4_pool}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.desyncMitigationMode">desync_mitigation_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#desync_mitigation_mode Alb#desync_mitigation_mode}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.dropInvalidHeaderFields">drop_invalid_header_fields</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#drop_invalid_header_fields Alb#drop_invalid_header_fields}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.enableCrossZoneLoadBalancing">enable_cross_zone_load_balancing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#enable_cross_zone_load_balancing Alb#enable_cross_zone_load_balancing}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.enableDeletionProtection">enable_deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#enable_deletion_protection Alb#enable_deletion_protection}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.enableHttp2">enable_http2</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#enable_http2 Alb#enable_http2}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.enableWafFailOpen">enable_waf_fail_open</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#enable_waf_fail_open Alb#enable_waf_fail_open}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#id Alb#id}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.idleTimeout">idle_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#idle_timeout Alb#idle_timeout}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.internal">internal</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#internal Alb#internal}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.ipAddressType">ip_address_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#ip_address_type Alb#ip_address_type}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.loadBalancerType">load_balancer_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#load_balancer_type Alb#load_balancer_type}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#name Alb#name}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.namePrefix">name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#name_prefix Alb#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.preserveHostHeader">preserve_host_header</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#preserve_host_header Alb#preserve_host_header}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#security_groups Alb#security_groups}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.subnetMapping">subnet_mapping</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.alb.AlbSubnetMapping">AlbSubnetMapping</a>]]</code> | subnet_mapping block. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.subnets">subnets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#subnets Alb#subnets}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#tags Alb#tags}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#tags_all Alb#tags_all}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbTimeouts">AlbTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_logs`<sup>Optional</sup> <a name="access_logs" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.accessLogs"></a>

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbAccessLogs">AlbAccessLogs</a>

access_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#access_logs Alb#access_logs}

---

##### `customer_owned_ipv4_pool`<sup>Optional</sup> <a name="customer_owned_ipv4_pool" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.customerOwnedIpv4Pool"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#customer_owned_ipv4_pool Alb#customer_owned_ipv4_pool}.

---

##### `desync_mitigation_mode`<sup>Optional</sup> <a name="desync_mitigation_mode" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.desyncMitigationMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#desync_mitigation_mode Alb#desync_mitigation_mode}.

---

##### `drop_invalid_header_fields`<sup>Optional</sup> <a name="drop_invalid_header_fields" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.dropInvalidHeaderFields"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#drop_invalid_header_fields Alb#drop_invalid_header_fields}.

---

##### `enable_cross_zone_load_balancing`<sup>Optional</sup> <a name="enable_cross_zone_load_balancing" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.enableCrossZoneLoadBalancing"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#enable_cross_zone_load_balancing Alb#enable_cross_zone_load_balancing}.

---

##### `enable_deletion_protection`<sup>Optional</sup> <a name="enable_deletion_protection" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.enableDeletionProtection"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#enable_deletion_protection Alb#enable_deletion_protection}.

---

##### `enable_http2`<sup>Optional</sup> <a name="enable_http2" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.enableHttp2"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#enable_http2 Alb#enable_http2}.

---

##### `enable_waf_fail_open`<sup>Optional</sup> <a name="enable_waf_fail_open" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.enableWafFailOpen"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#enable_waf_fail_open Alb#enable_waf_fail_open}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#id Alb#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idle_timeout`<sup>Optional</sup> <a name="idle_timeout" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.idleTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#idle_timeout Alb#idle_timeout}.

---

##### `internal`<sup>Optional</sup> <a name="internal" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.internal"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#internal Alb#internal}.

---

##### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.ipAddressType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#ip_address_type Alb#ip_address_type}.

---

##### `load_balancer_type`<sup>Optional</sup> <a name="load_balancer_type" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.loadBalancerType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#load_balancer_type Alb#load_balancer_type}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#name Alb#name}.

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.namePrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#name_prefix Alb#name_prefix}.

---

##### `preserve_host_header`<sup>Optional</sup> <a name="preserve_host_header" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.preserveHostHeader"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#preserve_host_header Alb#preserve_host_header}.

---

##### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.securityGroups"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#security_groups Alb#security_groups}.

---

##### `subnet_mapping`<sup>Optional</sup> <a name="subnet_mapping" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.subnetMapping"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.alb.AlbSubnetMapping">AlbSubnetMapping</a>]]

subnet_mapping block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#subnet_mapping Alb#subnet_mapping}

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.subnets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#subnets Alb#subnets}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#tags Alb#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#tags_all Alb#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbTimeouts">AlbTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#timeouts Alb#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.Alb.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.putAccessLogs">put_access_logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.putSubnetMapping">put_subnet_mapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetAccessLogs">reset_access_logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetCustomerOwnedIpv4Pool">reset_customer_owned_ipv4_pool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetDesyncMitigationMode">reset_desync_mitigation_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetDropInvalidHeaderFields">reset_drop_invalid_header_fields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetEnableCrossZoneLoadBalancing">reset_enable_cross_zone_load_balancing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetEnableDeletionProtection">reset_enable_deletion_protection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetEnableHttp2">reset_enable_http2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetEnableWafFailOpen">reset_enable_waf_fail_open</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetIdleTimeout">reset_idle_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetInternal">reset_internal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetIpAddressType">reset_ip_address_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetLoadBalancerType">reset_load_balancer_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetNamePrefix">reset_name_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetPreserveHostHeader">reset_preserve_host_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetSecurityGroups">reset_security_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetSubnetMapping">reset_subnet_mapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetSubnets">reset_subnets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.alb.Alb.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.alb.Alb.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.alb.Alb.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.alb.Alb.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.alb.Alb.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.alb.Alb.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.alb.Alb.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.alb.Alb.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.alb.Alb.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.alb.Alb.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.Alb.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.alb.Alb.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.Alb.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.alb.Alb.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.Alb.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.alb.Alb.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.Alb.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.alb.Alb.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.Alb.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.alb.Alb.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.Alb.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.alb.Alb.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.Alb.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.alb.Alb.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.Alb.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.alb.Alb.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.Alb.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.alb.Alb.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.Alb.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_access_logs` <a name="put_access_logs" id="@cdktf/provider-aws.alb.Alb.putAccessLogs"></a>

```python
def put_access_logs(
  bucket: str,
  enabled: typing.Union[bool, IResolvable] = None,
  prefix: str = None
) -> None
```

###### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.alb.Alb.putAccessLogs.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#bucket Alb#bucket}.

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.alb.Alb.putAccessLogs.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#enabled Alb#enabled}.

---

###### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.alb.Alb.putAccessLogs.parameter.prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#prefix Alb#prefix}.

---

##### `put_subnet_mapping` <a name="put_subnet_mapping" id="@cdktf/provider-aws.alb.Alb.putSubnetMapping"></a>

```python
def put_subnet_mapping(
  value: typing.Union[IResolvable, typing.List[AlbSubnetMapping]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.alb.Alb.putSubnetMapping.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.alb.AlbSubnetMapping">AlbSubnetMapping</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.alb.Alb.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.alb.Alb.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#create Alb#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.alb.Alb.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#delete Alb#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.alb.Alb.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#update Alb#update}.

---

##### `reset_access_logs` <a name="reset_access_logs" id="@cdktf/provider-aws.alb.Alb.resetAccessLogs"></a>

```python
def reset_access_logs() -> None
```

##### `reset_customer_owned_ipv4_pool` <a name="reset_customer_owned_ipv4_pool" id="@cdktf/provider-aws.alb.Alb.resetCustomerOwnedIpv4Pool"></a>

```python
def reset_customer_owned_ipv4_pool() -> None
```

##### `reset_desync_mitigation_mode` <a name="reset_desync_mitigation_mode" id="@cdktf/provider-aws.alb.Alb.resetDesyncMitigationMode"></a>

```python
def reset_desync_mitigation_mode() -> None
```

##### `reset_drop_invalid_header_fields` <a name="reset_drop_invalid_header_fields" id="@cdktf/provider-aws.alb.Alb.resetDropInvalidHeaderFields"></a>

```python
def reset_drop_invalid_header_fields() -> None
```

##### `reset_enable_cross_zone_load_balancing` <a name="reset_enable_cross_zone_load_balancing" id="@cdktf/provider-aws.alb.Alb.resetEnableCrossZoneLoadBalancing"></a>

```python
def reset_enable_cross_zone_load_balancing() -> None
```

##### `reset_enable_deletion_protection` <a name="reset_enable_deletion_protection" id="@cdktf/provider-aws.alb.Alb.resetEnableDeletionProtection"></a>

```python
def reset_enable_deletion_protection() -> None
```

##### `reset_enable_http2` <a name="reset_enable_http2" id="@cdktf/provider-aws.alb.Alb.resetEnableHttp2"></a>

```python
def reset_enable_http2() -> None
```

##### `reset_enable_waf_fail_open` <a name="reset_enable_waf_fail_open" id="@cdktf/provider-aws.alb.Alb.resetEnableWafFailOpen"></a>

```python
def reset_enable_waf_fail_open() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.alb.Alb.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_idle_timeout` <a name="reset_idle_timeout" id="@cdktf/provider-aws.alb.Alb.resetIdleTimeout"></a>

```python
def reset_idle_timeout() -> None
```

##### `reset_internal` <a name="reset_internal" id="@cdktf/provider-aws.alb.Alb.resetInternal"></a>

```python
def reset_internal() -> None
```

##### `reset_ip_address_type` <a name="reset_ip_address_type" id="@cdktf/provider-aws.alb.Alb.resetIpAddressType"></a>

```python
def reset_ip_address_type() -> None
```

##### `reset_load_balancer_type` <a name="reset_load_balancer_type" id="@cdktf/provider-aws.alb.Alb.resetLoadBalancerType"></a>

```python
def reset_load_balancer_type() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.alb.Alb.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_name_prefix` <a name="reset_name_prefix" id="@cdktf/provider-aws.alb.Alb.resetNamePrefix"></a>

```python
def reset_name_prefix() -> None
```

##### `reset_preserve_host_header` <a name="reset_preserve_host_header" id="@cdktf/provider-aws.alb.Alb.resetPreserveHostHeader"></a>

```python
def reset_preserve_host_header() -> None
```

##### `reset_security_groups` <a name="reset_security_groups" id="@cdktf/provider-aws.alb.Alb.resetSecurityGroups"></a>

```python
def reset_security_groups() -> None
```

##### `reset_subnet_mapping` <a name="reset_subnet_mapping" id="@cdktf/provider-aws.alb.Alb.resetSubnetMapping"></a>

```python
def reset_subnet_mapping() -> None
```

##### `reset_subnets` <a name="reset_subnets" id="@cdktf/provider-aws.alb.Alb.resetSubnets"></a>

```python
def reset_subnets() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.alb.Alb.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.alb.Alb.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.alb.Alb.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.Alb.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.alb.Alb.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import alb

alb.Alb.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.alb.Alb.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.alb.Alb.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import alb

alb.Alb.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.alb.Alb.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.alb.Alb.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import alb

alb.Alb.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.alb.Alb.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.accessLogs">access_logs</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference">AlbAccessLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.arnSuffix">arn_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.dnsName">dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.subnetMapping">subnet_mapping</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingList">AlbSubnetMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference">AlbTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.accessLogsInput">access_logs_input</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogs">AlbAccessLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.customerOwnedIpv4PoolInput">customer_owned_ipv4_pool_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.desyncMitigationModeInput">desync_mitigation_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.dropInvalidHeaderFieldsInput">drop_invalid_header_fields_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.enableCrossZoneLoadBalancingInput">enable_cross_zone_load_balancing_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.enableDeletionProtectionInput">enable_deletion_protection_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.enableHttp2Input">enable_http2_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.enableWafFailOpenInput">enable_waf_fail_open_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.idleTimeoutInput">idle_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.internalInput">internal_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.ipAddressTypeInput">ip_address_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.loadBalancerTypeInput">load_balancer_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.namePrefixInput">name_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.preserveHostHeaderInput">preserve_host_header_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.securityGroupsInput">security_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.subnetMappingInput">subnet_mapping_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.alb.AlbSubnetMapping">AlbSubnetMapping</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.subnetsInput">subnets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.alb.AlbTimeouts">AlbTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.customerOwnedIpv4Pool">customer_owned_ipv4_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.desyncMitigationMode">desync_mitigation_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.dropInvalidHeaderFields">drop_invalid_header_fields</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.enableCrossZoneLoadBalancing">enable_cross_zone_load_balancing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.enableDeletionProtection">enable_deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.enableHttp2">enable_http2</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.enableWafFailOpen">enable_waf_fail_open</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.idleTimeout">idle_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.internal">internal</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.loadBalancerType">load_balancer_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.namePrefix">name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.preserveHostHeader">preserve_host_header</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.alb.Alb.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.alb.Alb.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.alb.Alb.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.alb.Alb.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.alb.Alb.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.alb.Alb.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.alb.Alb.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.alb.Alb.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.alb.Alb.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.alb.Alb.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.alb.Alb.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.alb.Alb.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.alb.Alb.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.alb.Alb.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_logs`<sup>Required</sup> <a name="access_logs" id="@cdktf/provider-aws.alb.Alb.property.accessLogs"></a>

```python
access_logs: AlbAccessLogsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference">AlbAccessLogsOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.alb.Alb.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `arn_suffix`<sup>Required</sup> <a name="arn_suffix" id="@cdktf/provider-aws.alb.Alb.property.arnSuffix"></a>

```python
arn_suffix: str
```

- *Type:* str

---

##### `dns_name`<sup>Required</sup> <a name="dns_name" id="@cdktf/provider-aws.alb.Alb.property.dnsName"></a>

```python
dns_name: str
```

- *Type:* str

---

##### `subnet_mapping`<sup>Required</sup> <a name="subnet_mapping" id="@cdktf/provider-aws.alb.Alb.property.subnetMapping"></a>

```python
subnet_mapping: AlbSubnetMappingList
```

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbSubnetMappingList">AlbSubnetMappingList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.alb.Alb.property.timeouts"></a>

```python
timeouts: AlbTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference">AlbTimeoutsOutputReference</a>

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.alb.Alb.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-aws.alb.Alb.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

##### `access_logs_input`<sup>Optional</sup> <a name="access_logs_input" id="@cdktf/provider-aws.alb.Alb.property.accessLogsInput"></a>

```python
access_logs_input: AlbAccessLogs
```

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbAccessLogs">AlbAccessLogs</a>

---

##### `customer_owned_ipv4_pool_input`<sup>Optional</sup> <a name="customer_owned_ipv4_pool_input" id="@cdktf/provider-aws.alb.Alb.property.customerOwnedIpv4PoolInput"></a>

```python
customer_owned_ipv4_pool_input: str
```

- *Type:* str

---

##### `desync_mitigation_mode_input`<sup>Optional</sup> <a name="desync_mitigation_mode_input" id="@cdktf/provider-aws.alb.Alb.property.desyncMitigationModeInput"></a>

```python
desync_mitigation_mode_input: str
```

- *Type:* str

---

##### `drop_invalid_header_fields_input`<sup>Optional</sup> <a name="drop_invalid_header_fields_input" id="@cdktf/provider-aws.alb.Alb.property.dropInvalidHeaderFieldsInput"></a>

```python
drop_invalid_header_fields_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_cross_zone_load_balancing_input`<sup>Optional</sup> <a name="enable_cross_zone_load_balancing_input" id="@cdktf/provider-aws.alb.Alb.property.enableCrossZoneLoadBalancingInput"></a>

```python
enable_cross_zone_load_balancing_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_deletion_protection_input`<sup>Optional</sup> <a name="enable_deletion_protection_input" id="@cdktf/provider-aws.alb.Alb.property.enableDeletionProtectionInput"></a>

```python
enable_deletion_protection_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_http2_input`<sup>Optional</sup> <a name="enable_http2_input" id="@cdktf/provider-aws.alb.Alb.property.enableHttp2Input"></a>

```python
enable_http2_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_waf_fail_open_input`<sup>Optional</sup> <a name="enable_waf_fail_open_input" id="@cdktf/provider-aws.alb.Alb.property.enableWafFailOpenInput"></a>

```python
enable_waf_fail_open_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.alb.Alb.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `idle_timeout_input`<sup>Optional</sup> <a name="idle_timeout_input" id="@cdktf/provider-aws.alb.Alb.property.idleTimeoutInput"></a>

```python
idle_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_input`<sup>Optional</sup> <a name="internal_input" id="@cdktf/provider-aws.alb.Alb.property.internalInput"></a>

```python
internal_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ip_address_type_input`<sup>Optional</sup> <a name="ip_address_type_input" id="@cdktf/provider-aws.alb.Alb.property.ipAddressTypeInput"></a>

```python
ip_address_type_input: str
```

- *Type:* str

---

##### `load_balancer_type_input`<sup>Optional</sup> <a name="load_balancer_type_input" id="@cdktf/provider-aws.alb.Alb.property.loadBalancerTypeInput"></a>

```python
load_balancer_type_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.alb.Alb.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name_prefix_input`<sup>Optional</sup> <a name="name_prefix_input" id="@cdktf/provider-aws.alb.Alb.property.namePrefixInput"></a>

```python
name_prefix_input: str
```

- *Type:* str

---

##### `preserve_host_header_input`<sup>Optional</sup> <a name="preserve_host_header_input" id="@cdktf/provider-aws.alb.Alb.property.preserveHostHeaderInput"></a>

```python
preserve_host_header_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `security_groups_input`<sup>Optional</sup> <a name="security_groups_input" id="@cdktf/provider-aws.alb.Alb.property.securityGroupsInput"></a>

```python
security_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_mapping_input`<sup>Optional</sup> <a name="subnet_mapping_input" id="@cdktf/provider-aws.alb.Alb.property.subnetMappingInput"></a>

```python
subnet_mapping_input: typing.Union[IResolvable, typing.List[AlbSubnetMapping]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.alb.AlbSubnetMapping">AlbSubnetMapping</a>]]

---

##### `subnets_input`<sup>Optional</sup> <a name="subnets_input" id="@cdktf/provider-aws.alb.Alb.property.subnetsInput"></a>

```python
subnets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.alb.Alb.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.alb.Alb.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.alb.Alb.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[AlbTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.alb.AlbTimeouts">AlbTimeouts</a>, cdktf.IResolvable]

---

##### `customer_owned_ipv4_pool`<sup>Required</sup> <a name="customer_owned_ipv4_pool" id="@cdktf/provider-aws.alb.Alb.property.customerOwnedIpv4Pool"></a>

```python
customer_owned_ipv4_pool: str
```

- *Type:* str

---

##### `desync_mitigation_mode`<sup>Required</sup> <a name="desync_mitigation_mode" id="@cdktf/provider-aws.alb.Alb.property.desyncMitigationMode"></a>

```python
desync_mitigation_mode: str
```

- *Type:* str

---

##### `drop_invalid_header_fields`<sup>Required</sup> <a name="drop_invalid_header_fields" id="@cdktf/provider-aws.alb.Alb.property.dropInvalidHeaderFields"></a>

```python
drop_invalid_header_fields: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_cross_zone_load_balancing`<sup>Required</sup> <a name="enable_cross_zone_load_balancing" id="@cdktf/provider-aws.alb.Alb.property.enableCrossZoneLoadBalancing"></a>

```python
enable_cross_zone_load_balancing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_deletion_protection`<sup>Required</sup> <a name="enable_deletion_protection" id="@cdktf/provider-aws.alb.Alb.property.enableDeletionProtection"></a>

```python
enable_deletion_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_http2`<sup>Required</sup> <a name="enable_http2" id="@cdktf/provider-aws.alb.Alb.property.enableHttp2"></a>

```python
enable_http2: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_waf_fail_open`<sup>Required</sup> <a name="enable_waf_fail_open" id="@cdktf/provider-aws.alb.Alb.property.enableWafFailOpen"></a>

```python
enable_waf_fail_open: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.alb.Alb.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idle_timeout`<sup>Required</sup> <a name="idle_timeout" id="@cdktf/provider-aws.alb.Alb.property.idleTimeout"></a>

```python
idle_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal`<sup>Required</sup> <a name="internal" id="@cdktf/provider-aws.alb.Alb.property.internal"></a>

```python
internal: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ip_address_type`<sup>Required</sup> <a name="ip_address_type" id="@cdktf/provider-aws.alb.Alb.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

---

##### `load_balancer_type`<sup>Required</sup> <a name="load_balancer_type" id="@cdktf/provider-aws.alb.Alb.property.loadBalancerType"></a>

```python
load_balancer_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.alb.Alb.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_prefix`<sup>Required</sup> <a name="name_prefix" id="@cdktf/provider-aws.alb.Alb.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

---

##### `preserve_host_header`<sup>Required</sup> <a name="preserve_host_header" id="@cdktf/provider-aws.alb.Alb.property.preserveHostHeader"></a>

```python
preserve_host_header: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `security_groups`<sup>Required</sup> <a name="security_groups" id="@cdktf/provider-aws.alb.Alb.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.alb.Alb.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.alb.Alb.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.alb.Alb.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.alb.Alb.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AlbAccessLogs <a name="AlbAccessLogs" id="@cdktf/provider-aws.alb.AlbAccessLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.alb.AlbAccessLogs.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb

alb.AlbAccessLogs(
  bucket: str,
  enabled: typing.Union[bool, IResolvable] = None,
  prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogs.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#bucket Alb#bucket}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogs.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#enabled Alb#enabled}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogs.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#prefix Alb#prefix}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.alb.AlbAccessLogs.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#bucket Alb#bucket}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.alb.AlbAccessLogs.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#enabled Alb#enabled}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.alb.AlbAccessLogs.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#prefix Alb#prefix}.

---

### AlbConfig <a name="AlbConfig" id="@cdktf/provider-aws.alb.AlbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.alb.AlbConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb

alb.AlbConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access_logs: AlbAccessLogs = None,
  customer_owned_ipv4_pool: str = None,
  desync_mitigation_mode: str = None,
  drop_invalid_header_fields: typing.Union[bool, IResolvable] = None,
  enable_cross_zone_load_balancing: typing.Union[bool, IResolvable] = None,
  enable_deletion_protection: typing.Union[bool, IResolvable] = None,
  enable_http2: typing.Union[bool, IResolvable] = None,
  enable_waf_fail_open: typing.Union[bool, IResolvable] = None,
  id: str = None,
  idle_timeout: typing.Union[int, float] = None,
  internal: typing.Union[bool, IResolvable] = None,
  ip_address_type: str = None,
  load_balancer_type: str = None,
  name: str = None,
  name_prefix: str = None,
  preserve_host_header: typing.Union[bool, IResolvable] = None,
  security_groups: typing.List[str] = None,
  subnet_mapping: typing.Union[IResolvable, typing.List[AlbSubnetMapping]] = None,
  subnets: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: AlbTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.accessLogs">access_logs</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogs">AlbAccessLogs</a></code> | access_logs block. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.customerOwnedIpv4Pool">customer_owned_ipv4_pool</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#customer_owned_ipv4_pool Alb#customer_owned_ipv4_pool}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.desyncMitigationMode">desync_mitigation_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#desync_mitigation_mode Alb#desync_mitigation_mode}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.dropInvalidHeaderFields">drop_invalid_header_fields</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#drop_invalid_header_fields Alb#drop_invalid_header_fields}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.enableCrossZoneLoadBalancing">enable_cross_zone_load_balancing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#enable_cross_zone_load_balancing Alb#enable_cross_zone_load_balancing}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.enableDeletionProtection">enable_deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#enable_deletion_protection Alb#enable_deletion_protection}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.enableHttp2">enable_http2</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#enable_http2 Alb#enable_http2}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.enableWafFailOpen">enable_waf_fail_open</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#enable_waf_fail_open Alb#enable_waf_fail_open}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#id Alb#id}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.idleTimeout">idle_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#idle_timeout Alb#idle_timeout}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.internal">internal</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#internal Alb#internal}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#ip_address_type Alb#ip_address_type}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.loadBalancerType">load_balancer_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#load_balancer_type Alb#load_balancer_type}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#name Alb#name}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.namePrefix">name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#name_prefix Alb#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.preserveHostHeader">preserve_host_header</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#preserve_host_header Alb#preserve_host_header}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#security_groups Alb#security_groups}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.subnetMapping">subnet_mapping</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.alb.AlbSubnetMapping">AlbSubnetMapping</a>]]</code> | subnet_mapping block. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#subnets Alb#subnets}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#tags Alb#tags}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#tags_all Alb#tags_all}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbTimeouts">AlbTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.alb.AlbConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.alb.AlbConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.alb.AlbConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.alb.AlbConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.alb.AlbConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.alb.AlbConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.alb.AlbConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_logs`<sup>Optional</sup> <a name="access_logs" id="@cdktf/provider-aws.alb.AlbConfig.property.accessLogs"></a>

```python
access_logs: AlbAccessLogs
```

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbAccessLogs">AlbAccessLogs</a>

access_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#access_logs Alb#access_logs}

---

##### `customer_owned_ipv4_pool`<sup>Optional</sup> <a name="customer_owned_ipv4_pool" id="@cdktf/provider-aws.alb.AlbConfig.property.customerOwnedIpv4Pool"></a>

```python
customer_owned_ipv4_pool: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#customer_owned_ipv4_pool Alb#customer_owned_ipv4_pool}.

---

##### `desync_mitigation_mode`<sup>Optional</sup> <a name="desync_mitigation_mode" id="@cdktf/provider-aws.alb.AlbConfig.property.desyncMitigationMode"></a>

```python
desync_mitigation_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#desync_mitigation_mode Alb#desync_mitigation_mode}.

---

##### `drop_invalid_header_fields`<sup>Optional</sup> <a name="drop_invalid_header_fields" id="@cdktf/provider-aws.alb.AlbConfig.property.dropInvalidHeaderFields"></a>

```python
drop_invalid_header_fields: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#drop_invalid_header_fields Alb#drop_invalid_header_fields}.

---

##### `enable_cross_zone_load_balancing`<sup>Optional</sup> <a name="enable_cross_zone_load_balancing" id="@cdktf/provider-aws.alb.AlbConfig.property.enableCrossZoneLoadBalancing"></a>

```python
enable_cross_zone_load_balancing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#enable_cross_zone_load_balancing Alb#enable_cross_zone_load_balancing}.

---

##### `enable_deletion_protection`<sup>Optional</sup> <a name="enable_deletion_protection" id="@cdktf/provider-aws.alb.AlbConfig.property.enableDeletionProtection"></a>

```python
enable_deletion_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#enable_deletion_protection Alb#enable_deletion_protection}.

---

##### `enable_http2`<sup>Optional</sup> <a name="enable_http2" id="@cdktf/provider-aws.alb.AlbConfig.property.enableHttp2"></a>

```python
enable_http2: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#enable_http2 Alb#enable_http2}.

---

##### `enable_waf_fail_open`<sup>Optional</sup> <a name="enable_waf_fail_open" id="@cdktf/provider-aws.alb.AlbConfig.property.enableWafFailOpen"></a>

```python
enable_waf_fail_open: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#enable_waf_fail_open Alb#enable_waf_fail_open}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.alb.AlbConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#id Alb#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idle_timeout`<sup>Optional</sup> <a name="idle_timeout" id="@cdktf/provider-aws.alb.AlbConfig.property.idleTimeout"></a>

```python
idle_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#idle_timeout Alb#idle_timeout}.

---

##### `internal`<sup>Optional</sup> <a name="internal" id="@cdktf/provider-aws.alb.AlbConfig.property.internal"></a>

```python
internal: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#internal Alb#internal}.

---

##### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktf/provider-aws.alb.AlbConfig.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#ip_address_type Alb#ip_address_type}.

---

##### `load_balancer_type`<sup>Optional</sup> <a name="load_balancer_type" id="@cdktf/provider-aws.alb.AlbConfig.property.loadBalancerType"></a>

```python
load_balancer_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#load_balancer_type Alb#load_balancer_type}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.alb.AlbConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#name Alb#name}.

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-aws.alb.AlbConfig.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#name_prefix Alb#name_prefix}.

---

##### `preserve_host_header`<sup>Optional</sup> <a name="preserve_host_header" id="@cdktf/provider-aws.alb.AlbConfig.property.preserveHostHeader"></a>

```python
preserve_host_header: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#preserve_host_header Alb#preserve_host_header}.

---

##### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@cdktf/provider-aws.alb.AlbConfig.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#security_groups Alb#security_groups}.

---

##### `subnet_mapping`<sup>Optional</sup> <a name="subnet_mapping" id="@cdktf/provider-aws.alb.AlbConfig.property.subnetMapping"></a>

```python
subnet_mapping: typing.Union[IResolvable, typing.List[AlbSubnetMapping]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.alb.AlbSubnetMapping">AlbSubnetMapping</a>]]

subnet_mapping block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#subnet_mapping Alb#subnet_mapping}

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktf/provider-aws.alb.AlbConfig.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#subnets Alb#subnets}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.alb.AlbConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#tags Alb#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.alb.AlbConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#tags_all Alb#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.alb.AlbConfig.property.timeouts"></a>

```python
timeouts: AlbTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbTimeouts">AlbTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#timeouts Alb#timeouts}

---

### AlbSubnetMapping <a name="AlbSubnetMapping" id="@cdktf/provider-aws.alb.AlbSubnetMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.alb.AlbSubnetMapping.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb

alb.AlbSubnetMapping(
  subnet_id: str,
  allocation_id: str = None,
  ipv6_address: str = None,
  private_ipv4_address: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMapping.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#subnet_id Alb#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMapping.property.allocationId">allocation_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#allocation_id Alb#allocation_id}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMapping.property.ipv6Address">ipv6_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#ipv6_address Alb#ipv6_address}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMapping.property.privateIpv4Address">private_ipv4_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#private_ipv4_address Alb#private_ipv4_address}. |

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-aws.alb.AlbSubnetMapping.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#subnet_id Alb#subnet_id}.

---

##### `allocation_id`<sup>Optional</sup> <a name="allocation_id" id="@cdktf/provider-aws.alb.AlbSubnetMapping.property.allocationId"></a>

```python
allocation_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#allocation_id Alb#allocation_id}.

---

##### `ipv6_address`<sup>Optional</sup> <a name="ipv6_address" id="@cdktf/provider-aws.alb.AlbSubnetMapping.property.ipv6Address"></a>

```python
ipv6_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#ipv6_address Alb#ipv6_address}.

---

##### `private_ipv4_address`<sup>Optional</sup> <a name="private_ipv4_address" id="@cdktf/provider-aws.alb.AlbSubnetMapping.property.privateIpv4Address"></a>

```python
private_ipv4_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#private_ipv4_address Alb#private_ipv4_address}.

---

### AlbTimeouts <a name="AlbTimeouts" id="@cdktf/provider-aws.alb.AlbTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.alb.AlbTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb

alb.AlbTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#create Alb#create}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#delete Alb#delete}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#update Alb#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.alb.AlbTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#create Alb#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.alb.AlbTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#delete Alb#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.alb.AlbTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb#update Alb#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AlbAccessLogsOutputReference <a name="AlbAccessLogsOutputReference" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb

alb.AlbAccessLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogs">AlbAccessLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.internalValue"></a>

```python
internal_value: AlbAccessLogs
```

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbAccessLogs">AlbAccessLogs</a>

---


### AlbSubnetMappingList <a name="AlbSubnetMappingList" id="@cdktf/provider-aws.alb.AlbSubnetMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.alb.AlbSubnetMappingList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb

alb.AlbSubnetMappingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.alb.AlbSubnetMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.alb.AlbSubnetMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.alb.AlbSubnetMappingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.alb.AlbSubnetMappingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.alb.AlbSubnetMappingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.alb.AlbSubnetMappingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.alb.AlbSubnetMappingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AlbSubnetMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.alb.AlbSubnetMappingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.alb.AlbSubnetMapping">AlbSubnetMapping</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.alb.AlbSubnetMappingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.alb.AlbSubnetMappingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.alb.AlbSubnetMappingList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AlbSubnetMapping]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.alb.AlbSubnetMapping">AlbSubnetMapping</a>]]

---


### AlbSubnetMappingOutputReference <a name="AlbSubnetMappingOutputReference" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb

alb.AlbSubnetMappingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.resetAllocationId">reset_allocation_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.resetIpv6Address">reset_ipv6_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.resetPrivateIpv4Address">reset_private_ipv4_address</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allocation_id` <a name="reset_allocation_id" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.resetAllocationId"></a>

```python
def reset_allocation_id() -> None
```

##### `reset_ipv6_address` <a name="reset_ipv6_address" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.resetIpv6Address"></a>

```python
def reset_ipv6_address() -> None
```

##### `reset_private_ipv4_address` <a name="reset_private_ipv4_address" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.resetPrivateIpv4Address"></a>

```python
def reset_private_ipv4_address() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.outpostId">outpost_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.allocationIdInput">allocation_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.ipv6AddressInput">ipv6_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.privateIpv4AddressInput">private_ipv4_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.allocationId">allocation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.ipv6Address">ipv6_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.privateIpv4Address">private_ipv4_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.alb.AlbSubnetMapping">AlbSubnetMapping</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `outpost_id`<sup>Required</sup> <a name="outpost_id" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.outpostId"></a>

```python
outpost_id: str
```

- *Type:* str

---

##### `allocation_id_input`<sup>Optional</sup> <a name="allocation_id_input" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.allocationIdInput"></a>

```python
allocation_id_input: str
```

- *Type:* str

---

##### `ipv6_address_input`<sup>Optional</sup> <a name="ipv6_address_input" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.ipv6AddressInput"></a>

```python
ipv6_address_input: str
```

- *Type:* str

---

##### `private_ipv4_address_input`<sup>Optional</sup> <a name="private_ipv4_address_input" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.privateIpv4AddressInput"></a>

```python
private_ipv4_address_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `allocation_id`<sup>Required</sup> <a name="allocation_id" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.allocationId"></a>

```python
allocation_id: str
```

- *Type:* str

---

##### `ipv6_address`<sup>Required</sup> <a name="ipv6_address" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.ipv6Address"></a>

```python
ipv6_address: str
```

- *Type:* str

---

##### `private_ipv4_address`<sup>Required</sup> <a name="private_ipv4_address" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.privateIpv4Address"></a>

```python
private_ipv4_address: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AlbSubnetMapping, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.alb.AlbSubnetMapping">AlbSubnetMapping</a>, cdktf.IResolvable]

---


### AlbTimeoutsOutputReference <a name="AlbTimeoutsOutputReference" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb

alb.AlbTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.alb.AlbTimeouts">AlbTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[AlbTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.alb.AlbTimeouts">AlbTimeouts</a>, cdktf.IResolvable]

---



