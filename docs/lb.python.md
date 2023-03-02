# `lb` Submodule <a name="`lb` Submodule" id="@cdktf/provider-aws.lb"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Lb <a name="Lb" id="@cdktf/provider-aws.lb.Lb"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lb aws_lb}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lb.Lb.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lb

lb.Lb(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access_logs: LbAccessLogs = None,
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
  subnet_mapping: typing.Union[IResolvable, typing.List[LbSubnetMapping]] = None,
  subnets: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: LbTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.accessLogs">access_logs</a></code> | <code><a href="#@cdktf/provider-aws.lb.LbAccessLogs">LbAccessLogs</a></code> | access_logs block. |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.customerOwnedIpv4Pool">customer_owned_ipv4_pool</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#customer_owned_ipv4_pool Lb#customer_owned_ipv4_pool}. |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.desyncMitigationMode">desync_mitigation_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#desync_mitigation_mode Lb#desync_mitigation_mode}. |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.dropInvalidHeaderFields">drop_invalid_header_fields</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#drop_invalid_header_fields Lb#drop_invalid_header_fields}. |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.enableCrossZoneLoadBalancing">enable_cross_zone_load_balancing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#enable_cross_zone_load_balancing Lb#enable_cross_zone_load_balancing}. |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.enableDeletionProtection">enable_deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#enable_deletion_protection Lb#enable_deletion_protection}. |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.enableHttp2">enable_http2</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#enable_http2 Lb#enable_http2}. |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.enableWafFailOpen">enable_waf_fail_open</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#enable_waf_fail_open Lb#enable_waf_fail_open}. |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#id Lb#id}. |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.idleTimeout">idle_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#idle_timeout Lb#idle_timeout}. |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.internal">internal</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#internal Lb#internal}. |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.ipAddressType">ip_address_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#ip_address_type Lb#ip_address_type}. |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.loadBalancerType">load_balancer_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#load_balancer_type Lb#load_balancer_type}. |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#name Lb#name}. |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.namePrefix">name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#name_prefix Lb#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.preserveHostHeader">preserve_host_header</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#preserve_host_header Lb#preserve_host_header}. |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#security_groups Lb#security_groups}. |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.subnetMapping">subnet_mapping</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lb.LbSubnetMapping">LbSubnetMapping</a>]]</code> | subnet_mapping block. |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.subnets">subnets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#subnets Lb#subnets}. |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#tags Lb#tags}. |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#tags_all Lb#tags_all}. |
| <code><a href="#@cdktf/provider-aws.lb.Lb.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lb.LbTimeouts">LbTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_logs`<sup>Optional</sup> <a name="access_logs" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.accessLogs"></a>

- *Type:* <a href="#@cdktf/provider-aws.lb.LbAccessLogs">LbAccessLogs</a>

access_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#access_logs Lb#access_logs}

---

##### `customer_owned_ipv4_pool`<sup>Optional</sup> <a name="customer_owned_ipv4_pool" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.customerOwnedIpv4Pool"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#customer_owned_ipv4_pool Lb#customer_owned_ipv4_pool}.

---

##### `desync_mitigation_mode`<sup>Optional</sup> <a name="desync_mitigation_mode" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.desyncMitigationMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#desync_mitigation_mode Lb#desync_mitigation_mode}.

---

##### `drop_invalid_header_fields`<sup>Optional</sup> <a name="drop_invalid_header_fields" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.dropInvalidHeaderFields"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#drop_invalid_header_fields Lb#drop_invalid_header_fields}.

---

##### `enable_cross_zone_load_balancing`<sup>Optional</sup> <a name="enable_cross_zone_load_balancing" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.enableCrossZoneLoadBalancing"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#enable_cross_zone_load_balancing Lb#enable_cross_zone_load_balancing}.

---

##### `enable_deletion_protection`<sup>Optional</sup> <a name="enable_deletion_protection" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.enableDeletionProtection"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#enable_deletion_protection Lb#enable_deletion_protection}.

---

##### `enable_http2`<sup>Optional</sup> <a name="enable_http2" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.enableHttp2"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#enable_http2 Lb#enable_http2}.

---

##### `enable_waf_fail_open`<sup>Optional</sup> <a name="enable_waf_fail_open" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.enableWafFailOpen"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#enable_waf_fail_open Lb#enable_waf_fail_open}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#id Lb#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idle_timeout`<sup>Optional</sup> <a name="idle_timeout" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.idleTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#idle_timeout Lb#idle_timeout}.

---

##### `internal`<sup>Optional</sup> <a name="internal" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.internal"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#internal Lb#internal}.

---

##### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.ipAddressType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#ip_address_type Lb#ip_address_type}.

---

##### `load_balancer_type`<sup>Optional</sup> <a name="load_balancer_type" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.loadBalancerType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#load_balancer_type Lb#load_balancer_type}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#name Lb#name}.

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.namePrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#name_prefix Lb#name_prefix}.

---

##### `preserve_host_header`<sup>Optional</sup> <a name="preserve_host_header" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.preserveHostHeader"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#preserve_host_header Lb#preserve_host_header}.

---

##### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.securityGroups"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#security_groups Lb#security_groups}.

---

##### `subnet_mapping`<sup>Optional</sup> <a name="subnet_mapping" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.subnetMapping"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lb.LbSubnetMapping">LbSubnetMapping</a>]]

subnet_mapping block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#subnet_mapping Lb#subnet_mapping}

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.subnets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#subnets Lb#subnets}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#tags Lb#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#tags_all Lb#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lb.Lb.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.lb.LbTimeouts">LbTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#timeouts Lb#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lb.Lb.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lb.Lb.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lb.Lb.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lb.Lb.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lb.Lb.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.putAccessLogs">put_access_logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.putSubnetMapping">put_subnet_mapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.resetAccessLogs">reset_access_logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.resetCustomerOwnedIpv4Pool">reset_customer_owned_ipv4_pool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.resetDesyncMitigationMode">reset_desync_mitigation_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.resetDropInvalidHeaderFields">reset_drop_invalid_header_fields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.resetEnableCrossZoneLoadBalancing">reset_enable_cross_zone_load_balancing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.resetEnableDeletionProtection">reset_enable_deletion_protection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.resetEnableHttp2">reset_enable_http2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.resetEnableWafFailOpen">reset_enable_waf_fail_open</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.resetIdleTimeout">reset_idle_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.resetInternal">reset_internal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.resetIpAddressType">reset_ip_address_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.resetLoadBalancerType">reset_load_balancer_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.resetNamePrefix">reset_name_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.resetPreserveHostHeader">reset_preserve_host_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.resetSecurityGroups">reset_security_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.resetSubnetMapping">reset_subnet_mapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.resetSubnets">reset_subnets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lb.Lb.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.lb.Lb.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lb.Lb.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lb.Lb.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.lb.Lb.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.lb.Lb.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.lb.Lb.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.lb.Lb.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.lb.Lb.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lb.Lb.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lb.Lb.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lb.Lb.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lb.Lb.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lb.Lb.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lb.Lb.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lb.Lb.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lb.Lb.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lb.Lb.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lb.Lb.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lb.Lb.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lb.Lb.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lb.Lb.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lb.Lb.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lb.Lb.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lb.Lb.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lb.Lb.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lb.Lb.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lb.Lb.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lb.Lb.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_access_logs` <a name="put_access_logs" id="@cdktf/provider-aws.lb.Lb.putAccessLogs"></a>

```python
def put_access_logs(
  bucket: str,
  enabled: typing.Union[bool, IResolvable] = None,
  prefix: str = None
) -> None
```

###### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.lb.Lb.putAccessLogs.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#bucket Lb#bucket}.

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.lb.Lb.putAccessLogs.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#enabled Lb#enabled}.

---

###### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.lb.Lb.putAccessLogs.parameter.prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#prefix Lb#prefix}.

---

##### `put_subnet_mapping` <a name="put_subnet_mapping" id="@cdktf/provider-aws.lb.Lb.putSubnetMapping"></a>

```python
def put_subnet_mapping(
  value: typing.Union[IResolvable, typing.List[LbSubnetMapping]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lb.Lb.putSubnetMapping.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lb.LbSubnetMapping">LbSubnetMapping</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.lb.Lb.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.lb.Lb.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#create Lb#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.lb.Lb.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#delete Lb#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.lb.Lb.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#update Lb#update}.

---

##### `reset_access_logs` <a name="reset_access_logs" id="@cdktf/provider-aws.lb.Lb.resetAccessLogs"></a>

```python
def reset_access_logs() -> None
```

##### `reset_customer_owned_ipv4_pool` <a name="reset_customer_owned_ipv4_pool" id="@cdktf/provider-aws.lb.Lb.resetCustomerOwnedIpv4Pool"></a>

```python
def reset_customer_owned_ipv4_pool() -> None
```

##### `reset_desync_mitigation_mode` <a name="reset_desync_mitigation_mode" id="@cdktf/provider-aws.lb.Lb.resetDesyncMitigationMode"></a>

```python
def reset_desync_mitigation_mode() -> None
```

##### `reset_drop_invalid_header_fields` <a name="reset_drop_invalid_header_fields" id="@cdktf/provider-aws.lb.Lb.resetDropInvalidHeaderFields"></a>

```python
def reset_drop_invalid_header_fields() -> None
```

##### `reset_enable_cross_zone_load_balancing` <a name="reset_enable_cross_zone_load_balancing" id="@cdktf/provider-aws.lb.Lb.resetEnableCrossZoneLoadBalancing"></a>

```python
def reset_enable_cross_zone_load_balancing() -> None
```

##### `reset_enable_deletion_protection` <a name="reset_enable_deletion_protection" id="@cdktf/provider-aws.lb.Lb.resetEnableDeletionProtection"></a>

```python
def reset_enable_deletion_protection() -> None
```

##### `reset_enable_http2` <a name="reset_enable_http2" id="@cdktf/provider-aws.lb.Lb.resetEnableHttp2"></a>

```python
def reset_enable_http2() -> None
```

##### `reset_enable_waf_fail_open` <a name="reset_enable_waf_fail_open" id="@cdktf/provider-aws.lb.Lb.resetEnableWafFailOpen"></a>

```python
def reset_enable_waf_fail_open() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.lb.Lb.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_idle_timeout` <a name="reset_idle_timeout" id="@cdktf/provider-aws.lb.Lb.resetIdleTimeout"></a>

```python
def reset_idle_timeout() -> None
```

##### `reset_internal` <a name="reset_internal" id="@cdktf/provider-aws.lb.Lb.resetInternal"></a>

```python
def reset_internal() -> None
```

##### `reset_ip_address_type` <a name="reset_ip_address_type" id="@cdktf/provider-aws.lb.Lb.resetIpAddressType"></a>

```python
def reset_ip_address_type() -> None
```

##### `reset_load_balancer_type` <a name="reset_load_balancer_type" id="@cdktf/provider-aws.lb.Lb.resetLoadBalancerType"></a>

```python
def reset_load_balancer_type() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.lb.Lb.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_name_prefix` <a name="reset_name_prefix" id="@cdktf/provider-aws.lb.Lb.resetNamePrefix"></a>

```python
def reset_name_prefix() -> None
```

##### `reset_preserve_host_header` <a name="reset_preserve_host_header" id="@cdktf/provider-aws.lb.Lb.resetPreserveHostHeader"></a>

```python
def reset_preserve_host_header() -> None
```

##### `reset_security_groups` <a name="reset_security_groups" id="@cdktf/provider-aws.lb.Lb.resetSecurityGroups"></a>

```python
def reset_security_groups() -> None
```

##### `reset_subnet_mapping` <a name="reset_subnet_mapping" id="@cdktf/provider-aws.lb.Lb.resetSubnetMapping"></a>

```python
def reset_subnet_mapping() -> None
```

##### `reset_subnets` <a name="reset_subnets" id="@cdktf/provider-aws.lb.Lb.resetSubnets"></a>

```python
def reset_subnets() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.lb.Lb.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.lb.Lb.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.lb.Lb.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lb.Lb.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lb.Lb.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.lb.Lb.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import lb

lb.Lb.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lb.Lb.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.lb.Lb.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import lb

lb.Lb.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lb.Lb.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.lb.Lb.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import lb

lb.Lb.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lb.Lb.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.accessLogs">access_logs</a></code> | <code><a href="#@cdktf/provider-aws.lb.LbAccessLogsOutputReference">LbAccessLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.arnSuffix">arn_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.dnsName">dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.subnetMapping">subnet_mapping</a></code> | <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingList">LbSubnetMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lb.LbTimeoutsOutputReference">LbTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.accessLogsInput">access_logs_input</a></code> | <code><a href="#@cdktf/provider-aws.lb.LbAccessLogs">LbAccessLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.customerOwnedIpv4PoolInput">customer_owned_ipv4_pool_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.desyncMitigationModeInput">desync_mitigation_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.dropInvalidHeaderFieldsInput">drop_invalid_header_fields_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.enableCrossZoneLoadBalancingInput">enable_cross_zone_load_balancing_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.enableDeletionProtectionInput">enable_deletion_protection_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.enableHttp2Input">enable_http2_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.enableWafFailOpenInput">enable_waf_fail_open_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.idleTimeoutInput">idle_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.internalInput">internal_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.ipAddressTypeInput">ip_address_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.loadBalancerTypeInput">load_balancer_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.namePrefixInput">name_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.preserveHostHeaderInput">preserve_host_header_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.securityGroupsInput">security_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.subnetMappingInput">subnet_mapping_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lb.LbSubnetMapping">LbSubnetMapping</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.subnetsInput">subnets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.lb.LbTimeouts">LbTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.customerOwnedIpv4Pool">customer_owned_ipv4_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.desyncMitigationMode">desync_mitigation_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.dropInvalidHeaderFields">drop_invalid_header_fields</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.enableCrossZoneLoadBalancing">enable_cross_zone_load_balancing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.enableDeletionProtection">enable_deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.enableHttp2">enable_http2</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.enableWafFailOpen">enable_waf_fail_open</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.idleTimeout">idle_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.internal">internal</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.loadBalancerType">load_balancer_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.namePrefix">name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.preserveHostHeader">preserve_host_header</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lb.Lb.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.lb.Lb.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lb.Lb.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.lb.Lb.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.lb.Lb.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.lb.Lb.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.lb.Lb.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lb.Lb.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lb.Lb.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lb.Lb.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lb.Lb.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lb.Lb.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lb.Lb.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lb.Lb.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_logs`<sup>Required</sup> <a name="access_logs" id="@cdktf/provider-aws.lb.Lb.property.accessLogs"></a>

```python
access_logs: LbAccessLogsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lb.LbAccessLogsOutputReference">LbAccessLogsOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.lb.Lb.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `arn_suffix`<sup>Required</sup> <a name="arn_suffix" id="@cdktf/provider-aws.lb.Lb.property.arnSuffix"></a>

```python
arn_suffix: str
```

- *Type:* str

---

##### `dns_name`<sup>Required</sup> <a name="dns_name" id="@cdktf/provider-aws.lb.Lb.property.dnsName"></a>

```python
dns_name: str
```

- *Type:* str

---

##### `subnet_mapping`<sup>Required</sup> <a name="subnet_mapping" id="@cdktf/provider-aws.lb.Lb.property.subnetMapping"></a>

```python
subnet_mapping: LbSubnetMappingList
```

- *Type:* <a href="#@cdktf/provider-aws.lb.LbSubnetMappingList">LbSubnetMappingList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.lb.Lb.property.timeouts"></a>

```python
timeouts: LbTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.lb.LbTimeoutsOutputReference">LbTimeoutsOutputReference</a>

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.lb.Lb.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-aws.lb.Lb.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

##### `access_logs_input`<sup>Optional</sup> <a name="access_logs_input" id="@cdktf/provider-aws.lb.Lb.property.accessLogsInput"></a>

```python
access_logs_input: LbAccessLogs
```

- *Type:* <a href="#@cdktf/provider-aws.lb.LbAccessLogs">LbAccessLogs</a>

---

##### `customer_owned_ipv4_pool_input`<sup>Optional</sup> <a name="customer_owned_ipv4_pool_input" id="@cdktf/provider-aws.lb.Lb.property.customerOwnedIpv4PoolInput"></a>

```python
customer_owned_ipv4_pool_input: str
```

- *Type:* str

---

##### `desync_mitigation_mode_input`<sup>Optional</sup> <a name="desync_mitigation_mode_input" id="@cdktf/provider-aws.lb.Lb.property.desyncMitigationModeInput"></a>

```python
desync_mitigation_mode_input: str
```

- *Type:* str

---

##### `drop_invalid_header_fields_input`<sup>Optional</sup> <a name="drop_invalid_header_fields_input" id="@cdktf/provider-aws.lb.Lb.property.dropInvalidHeaderFieldsInput"></a>

```python
drop_invalid_header_fields_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_cross_zone_load_balancing_input`<sup>Optional</sup> <a name="enable_cross_zone_load_balancing_input" id="@cdktf/provider-aws.lb.Lb.property.enableCrossZoneLoadBalancingInput"></a>

```python
enable_cross_zone_load_balancing_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_deletion_protection_input`<sup>Optional</sup> <a name="enable_deletion_protection_input" id="@cdktf/provider-aws.lb.Lb.property.enableDeletionProtectionInput"></a>

```python
enable_deletion_protection_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_http2_input`<sup>Optional</sup> <a name="enable_http2_input" id="@cdktf/provider-aws.lb.Lb.property.enableHttp2Input"></a>

```python
enable_http2_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_waf_fail_open_input`<sup>Optional</sup> <a name="enable_waf_fail_open_input" id="@cdktf/provider-aws.lb.Lb.property.enableWafFailOpenInput"></a>

```python
enable_waf_fail_open_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.lb.Lb.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `idle_timeout_input`<sup>Optional</sup> <a name="idle_timeout_input" id="@cdktf/provider-aws.lb.Lb.property.idleTimeoutInput"></a>

```python
idle_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_input`<sup>Optional</sup> <a name="internal_input" id="@cdktf/provider-aws.lb.Lb.property.internalInput"></a>

```python
internal_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ip_address_type_input`<sup>Optional</sup> <a name="ip_address_type_input" id="@cdktf/provider-aws.lb.Lb.property.ipAddressTypeInput"></a>

```python
ip_address_type_input: str
```

- *Type:* str

---

##### `load_balancer_type_input`<sup>Optional</sup> <a name="load_balancer_type_input" id="@cdktf/provider-aws.lb.Lb.property.loadBalancerTypeInput"></a>

```python
load_balancer_type_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.lb.Lb.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name_prefix_input`<sup>Optional</sup> <a name="name_prefix_input" id="@cdktf/provider-aws.lb.Lb.property.namePrefixInput"></a>

```python
name_prefix_input: str
```

- *Type:* str

---

##### `preserve_host_header_input`<sup>Optional</sup> <a name="preserve_host_header_input" id="@cdktf/provider-aws.lb.Lb.property.preserveHostHeaderInput"></a>

```python
preserve_host_header_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `security_groups_input`<sup>Optional</sup> <a name="security_groups_input" id="@cdktf/provider-aws.lb.Lb.property.securityGroupsInput"></a>

```python
security_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_mapping_input`<sup>Optional</sup> <a name="subnet_mapping_input" id="@cdktf/provider-aws.lb.Lb.property.subnetMappingInput"></a>

```python
subnet_mapping_input: typing.Union[IResolvable, typing.List[LbSubnetMapping]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lb.LbSubnetMapping">LbSubnetMapping</a>]]

---

##### `subnets_input`<sup>Optional</sup> <a name="subnets_input" id="@cdktf/provider-aws.lb.Lb.property.subnetsInput"></a>

```python
subnets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.lb.Lb.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.lb.Lb.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.lb.Lb.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[LbTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.lb.LbTimeouts">LbTimeouts</a>, cdktf.IResolvable]

---

##### `customer_owned_ipv4_pool`<sup>Required</sup> <a name="customer_owned_ipv4_pool" id="@cdktf/provider-aws.lb.Lb.property.customerOwnedIpv4Pool"></a>

```python
customer_owned_ipv4_pool: str
```

- *Type:* str

---

##### `desync_mitigation_mode`<sup>Required</sup> <a name="desync_mitigation_mode" id="@cdktf/provider-aws.lb.Lb.property.desyncMitigationMode"></a>

```python
desync_mitigation_mode: str
```

- *Type:* str

---

##### `drop_invalid_header_fields`<sup>Required</sup> <a name="drop_invalid_header_fields" id="@cdktf/provider-aws.lb.Lb.property.dropInvalidHeaderFields"></a>

```python
drop_invalid_header_fields: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_cross_zone_load_balancing`<sup>Required</sup> <a name="enable_cross_zone_load_balancing" id="@cdktf/provider-aws.lb.Lb.property.enableCrossZoneLoadBalancing"></a>

```python
enable_cross_zone_load_balancing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_deletion_protection`<sup>Required</sup> <a name="enable_deletion_protection" id="@cdktf/provider-aws.lb.Lb.property.enableDeletionProtection"></a>

```python
enable_deletion_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_http2`<sup>Required</sup> <a name="enable_http2" id="@cdktf/provider-aws.lb.Lb.property.enableHttp2"></a>

```python
enable_http2: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_waf_fail_open`<sup>Required</sup> <a name="enable_waf_fail_open" id="@cdktf/provider-aws.lb.Lb.property.enableWafFailOpen"></a>

```python
enable_waf_fail_open: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lb.Lb.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idle_timeout`<sup>Required</sup> <a name="idle_timeout" id="@cdktf/provider-aws.lb.Lb.property.idleTimeout"></a>

```python
idle_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal`<sup>Required</sup> <a name="internal" id="@cdktf/provider-aws.lb.Lb.property.internal"></a>

```python
internal: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ip_address_type`<sup>Required</sup> <a name="ip_address_type" id="@cdktf/provider-aws.lb.Lb.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

---

##### `load_balancer_type`<sup>Required</sup> <a name="load_balancer_type" id="@cdktf/provider-aws.lb.Lb.property.loadBalancerType"></a>

```python
load_balancer_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lb.Lb.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_prefix`<sup>Required</sup> <a name="name_prefix" id="@cdktf/provider-aws.lb.Lb.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

---

##### `preserve_host_header`<sup>Required</sup> <a name="preserve_host_header" id="@cdktf/provider-aws.lb.Lb.property.preserveHostHeader"></a>

```python
preserve_host_header: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `security_groups`<sup>Required</sup> <a name="security_groups" id="@cdktf/provider-aws.lb.Lb.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.lb.Lb.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.lb.Lb.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.lb.Lb.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lb.Lb.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lb.Lb.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LbAccessLogs <a name="LbAccessLogs" id="@cdktf/provider-aws.lb.LbAccessLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lb.LbAccessLogs.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lb

lb.LbAccessLogs(
  bucket: str,
  enabled: typing.Union[bool, IResolvable] = None,
  prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lb.LbAccessLogs.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#bucket Lb#bucket}. |
| <code><a href="#@cdktf/provider-aws.lb.LbAccessLogs.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#enabled Lb#enabled}. |
| <code><a href="#@cdktf/provider-aws.lb.LbAccessLogs.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#prefix Lb#prefix}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.lb.LbAccessLogs.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#bucket Lb#bucket}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.lb.LbAccessLogs.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#enabled Lb#enabled}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.lb.LbAccessLogs.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#prefix Lb#prefix}.

---

### LbConfig <a name="LbConfig" id="@cdktf/provider-aws.lb.LbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lb.LbConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lb

lb.LbConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access_logs: LbAccessLogs = None,
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
  subnet_mapping: typing.Union[IResolvable, typing.List[LbSubnetMapping]] = None,
  subnets: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: LbTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lb.LbConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbConfig.property.accessLogs">access_logs</a></code> | <code><a href="#@cdktf/provider-aws.lb.LbAccessLogs">LbAccessLogs</a></code> | access_logs block. |
| <code><a href="#@cdktf/provider-aws.lb.LbConfig.property.customerOwnedIpv4Pool">customer_owned_ipv4_pool</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#customer_owned_ipv4_pool Lb#customer_owned_ipv4_pool}. |
| <code><a href="#@cdktf/provider-aws.lb.LbConfig.property.desyncMitigationMode">desync_mitigation_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#desync_mitigation_mode Lb#desync_mitigation_mode}. |
| <code><a href="#@cdktf/provider-aws.lb.LbConfig.property.dropInvalidHeaderFields">drop_invalid_header_fields</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#drop_invalid_header_fields Lb#drop_invalid_header_fields}. |
| <code><a href="#@cdktf/provider-aws.lb.LbConfig.property.enableCrossZoneLoadBalancing">enable_cross_zone_load_balancing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#enable_cross_zone_load_balancing Lb#enable_cross_zone_load_balancing}. |
| <code><a href="#@cdktf/provider-aws.lb.LbConfig.property.enableDeletionProtection">enable_deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#enable_deletion_protection Lb#enable_deletion_protection}. |
| <code><a href="#@cdktf/provider-aws.lb.LbConfig.property.enableHttp2">enable_http2</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#enable_http2 Lb#enable_http2}. |
| <code><a href="#@cdktf/provider-aws.lb.LbConfig.property.enableWafFailOpen">enable_waf_fail_open</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#enable_waf_fail_open Lb#enable_waf_fail_open}. |
| <code><a href="#@cdktf/provider-aws.lb.LbConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#id Lb#id}. |
| <code><a href="#@cdktf/provider-aws.lb.LbConfig.property.idleTimeout">idle_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#idle_timeout Lb#idle_timeout}. |
| <code><a href="#@cdktf/provider-aws.lb.LbConfig.property.internal">internal</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#internal Lb#internal}. |
| <code><a href="#@cdktf/provider-aws.lb.LbConfig.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#ip_address_type Lb#ip_address_type}. |
| <code><a href="#@cdktf/provider-aws.lb.LbConfig.property.loadBalancerType">load_balancer_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#load_balancer_type Lb#load_balancer_type}. |
| <code><a href="#@cdktf/provider-aws.lb.LbConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#name Lb#name}. |
| <code><a href="#@cdktf/provider-aws.lb.LbConfig.property.namePrefix">name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#name_prefix Lb#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.lb.LbConfig.property.preserveHostHeader">preserve_host_header</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#preserve_host_header Lb#preserve_host_header}. |
| <code><a href="#@cdktf/provider-aws.lb.LbConfig.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#security_groups Lb#security_groups}. |
| <code><a href="#@cdktf/provider-aws.lb.LbConfig.property.subnetMapping">subnet_mapping</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lb.LbSubnetMapping">LbSubnetMapping</a>]]</code> | subnet_mapping block. |
| <code><a href="#@cdktf/provider-aws.lb.LbConfig.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#subnets Lb#subnets}. |
| <code><a href="#@cdktf/provider-aws.lb.LbConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#tags Lb#tags}. |
| <code><a href="#@cdktf/provider-aws.lb.LbConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#tags_all Lb#tags_all}. |
| <code><a href="#@cdktf/provider-aws.lb.LbConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lb.LbTimeouts">LbTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lb.LbConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lb.LbConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lb.LbConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lb.LbConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lb.LbConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lb.LbConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lb.LbConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_logs`<sup>Optional</sup> <a name="access_logs" id="@cdktf/provider-aws.lb.LbConfig.property.accessLogs"></a>

```python
access_logs: LbAccessLogs
```

- *Type:* <a href="#@cdktf/provider-aws.lb.LbAccessLogs">LbAccessLogs</a>

access_logs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#access_logs Lb#access_logs}

---

##### `customer_owned_ipv4_pool`<sup>Optional</sup> <a name="customer_owned_ipv4_pool" id="@cdktf/provider-aws.lb.LbConfig.property.customerOwnedIpv4Pool"></a>

```python
customer_owned_ipv4_pool: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#customer_owned_ipv4_pool Lb#customer_owned_ipv4_pool}.

---

##### `desync_mitigation_mode`<sup>Optional</sup> <a name="desync_mitigation_mode" id="@cdktf/provider-aws.lb.LbConfig.property.desyncMitigationMode"></a>

```python
desync_mitigation_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#desync_mitigation_mode Lb#desync_mitigation_mode}.

---

##### `drop_invalid_header_fields`<sup>Optional</sup> <a name="drop_invalid_header_fields" id="@cdktf/provider-aws.lb.LbConfig.property.dropInvalidHeaderFields"></a>

```python
drop_invalid_header_fields: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#drop_invalid_header_fields Lb#drop_invalid_header_fields}.

---

##### `enable_cross_zone_load_balancing`<sup>Optional</sup> <a name="enable_cross_zone_load_balancing" id="@cdktf/provider-aws.lb.LbConfig.property.enableCrossZoneLoadBalancing"></a>

```python
enable_cross_zone_load_balancing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#enable_cross_zone_load_balancing Lb#enable_cross_zone_load_balancing}.

---

##### `enable_deletion_protection`<sup>Optional</sup> <a name="enable_deletion_protection" id="@cdktf/provider-aws.lb.LbConfig.property.enableDeletionProtection"></a>

```python
enable_deletion_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#enable_deletion_protection Lb#enable_deletion_protection}.

---

##### `enable_http2`<sup>Optional</sup> <a name="enable_http2" id="@cdktf/provider-aws.lb.LbConfig.property.enableHttp2"></a>

```python
enable_http2: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#enable_http2 Lb#enable_http2}.

---

##### `enable_waf_fail_open`<sup>Optional</sup> <a name="enable_waf_fail_open" id="@cdktf/provider-aws.lb.LbConfig.property.enableWafFailOpen"></a>

```python
enable_waf_fail_open: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#enable_waf_fail_open Lb#enable_waf_fail_open}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lb.LbConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#id Lb#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idle_timeout`<sup>Optional</sup> <a name="idle_timeout" id="@cdktf/provider-aws.lb.LbConfig.property.idleTimeout"></a>

```python
idle_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#idle_timeout Lb#idle_timeout}.

---

##### `internal`<sup>Optional</sup> <a name="internal" id="@cdktf/provider-aws.lb.LbConfig.property.internal"></a>

```python
internal: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#internal Lb#internal}.

---

##### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktf/provider-aws.lb.LbConfig.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#ip_address_type Lb#ip_address_type}.

---

##### `load_balancer_type`<sup>Optional</sup> <a name="load_balancer_type" id="@cdktf/provider-aws.lb.LbConfig.property.loadBalancerType"></a>

```python
load_balancer_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#load_balancer_type Lb#load_balancer_type}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.lb.LbConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#name Lb#name}.

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-aws.lb.LbConfig.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#name_prefix Lb#name_prefix}.

---

##### `preserve_host_header`<sup>Optional</sup> <a name="preserve_host_header" id="@cdktf/provider-aws.lb.LbConfig.property.preserveHostHeader"></a>

```python
preserve_host_header: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#preserve_host_header Lb#preserve_host_header}.

---

##### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@cdktf/provider-aws.lb.LbConfig.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#security_groups Lb#security_groups}.

---

##### `subnet_mapping`<sup>Optional</sup> <a name="subnet_mapping" id="@cdktf/provider-aws.lb.LbConfig.property.subnetMapping"></a>

```python
subnet_mapping: typing.Union[IResolvable, typing.List[LbSubnetMapping]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lb.LbSubnetMapping">LbSubnetMapping</a>]]

subnet_mapping block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#subnet_mapping Lb#subnet_mapping}

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktf/provider-aws.lb.LbConfig.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#subnets Lb#subnets}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.lb.LbConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#tags Lb#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.lb.LbConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#tags_all Lb#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lb.LbConfig.property.timeouts"></a>

```python
timeouts: LbTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.lb.LbTimeouts">LbTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#timeouts Lb#timeouts}

---

### LbSubnetMapping <a name="LbSubnetMapping" id="@cdktf/provider-aws.lb.LbSubnetMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lb.LbSubnetMapping.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lb

lb.LbSubnetMapping(
  subnet_id: str,
  allocation_id: str = None,
  ipv6_address: str = None,
  private_ipv4_address: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMapping.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#subnet_id Lb#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMapping.property.allocationId">allocation_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#allocation_id Lb#allocation_id}. |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMapping.property.ipv6Address">ipv6_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#ipv6_address Lb#ipv6_address}. |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMapping.property.privateIpv4Address">private_ipv4_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#private_ipv4_address Lb#private_ipv4_address}. |

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-aws.lb.LbSubnetMapping.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#subnet_id Lb#subnet_id}.

---

##### `allocation_id`<sup>Optional</sup> <a name="allocation_id" id="@cdktf/provider-aws.lb.LbSubnetMapping.property.allocationId"></a>

```python
allocation_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#allocation_id Lb#allocation_id}.

---

##### `ipv6_address`<sup>Optional</sup> <a name="ipv6_address" id="@cdktf/provider-aws.lb.LbSubnetMapping.property.ipv6Address"></a>

```python
ipv6_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#ipv6_address Lb#ipv6_address}.

---

##### `private_ipv4_address`<sup>Optional</sup> <a name="private_ipv4_address" id="@cdktf/provider-aws.lb.LbSubnetMapping.property.privateIpv4Address"></a>

```python
private_ipv4_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#private_ipv4_address Lb#private_ipv4_address}.

---

### LbTimeouts <a name="LbTimeouts" id="@cdktf/provider-aws.lb.LbTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lb.LbTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lb

lb.LbTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lb.LbTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#create Lb#create}. |
| <code><a href="#@cdktf/provider-aws.lb.LbTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#delete Lb#delete}. |
| <code><a href="#@cdktf/provider-aws.lb.LbTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#update Lb#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.lb.LbTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#create Lb#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.lb.LbTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#delete Lb#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.lb.LbTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb#update Lb#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LbAccessLogsOutputReference <a name="LbAccessLogsOutputReference" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lb

lb.LbAccessLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lb.LbAccessLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lb.LbAccessLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lb.LbAccessLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbAccessLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbAccessLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbAccessLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbAccessLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbAccessLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbAccessLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbAccessLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbAccessLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbAccessLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbAccessLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbAccessLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lb.LbAccessLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lb.LbAccessLogsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbAccessLogsOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lb.LbAccessLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lb.LbAccessLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbAccessLogsOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbAccessLogsOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbAccessLogsOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbAccessLogsOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbAccessLogsOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbAccessLogsOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbAccessLogsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.lb.LbAccessLogs">LbAccessLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lb.LbAccessLogsOutputReference.property.internalValue"></a>

```python
internal_value: LbAccessLogs
```

- *Type:* <a href="#@cdktf/provider-aws.lb.LbAccessLogs">LbAccessLogs</a>

---


### LbSubnetMappingList <a name="LbSubnetMappingList" id="@cdktf/provider-aws.lb.LbSubnetMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lb.LbSubnetMappingList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lb

lb.LbSubnetMappingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lb.LbSubnetMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lb.LbSubnetMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.lb.LbSubnetMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lb.LbSubnetMappingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lb.LbSubnetMappingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lb.LbSubnetMappingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lb.LbSubnetMappingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lb.LbSubnetMappingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LbSubnetMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lb.LbSubnetMappingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lb.LbSubnetMapping">LbSubnetMapping</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lb.LbSubnetMappingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lb.LbSubnetMappingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lb.LbSubnetMappingList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[LbSubnetMapping]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.lb.LbSubnetMapping">LbSubnetMapping</a>]]

---


### LbSubnetMappingOutputReference <a name="LbSubnetMappingOutputReference" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lb

lb.LbSubnetMappingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.resetAllocationId">reset_allocation_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.resetIpv6Address">reset_ipv6_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.resetPrivateIpv4Address">reset_private_ipv4_address</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allocation_id` <a name="reset_allocation_id" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.resetAllocationId"></a>

```python
def reset_allocation_id() -> None
```

##### `reset_ipv6_address` <a name="reset_ipv6_address" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.resetIpv6Address"></a>

```python
def reset_ipv6_address() -> None
```

##### `reset_private_ipv4_address` <a name="reset_private_ipv4_address" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.resetPrivateIpv4Address"></a>

```python
def reset_private_ipv4_address() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.property.outpostId">outpost_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.property.allocationIdInput">allocation_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.property.ipv6AddressInput">ipv6_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.property.privateIpv4AddressInput">private_ipv4_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.property.allocationId">allocation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.property.ipv6Address">ipv6_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.property.privateIpv4Address">private_ipv4_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.lb.LbSubnetMapping">LbSubnetMapping</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `outpost_id`<sup>Required</sup> <a name="outpost_id" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.property.outpostId"></a>

```python
outpost_id: str
```

- *Type:* str

---

##### `allocation_id_input`<sup>Optional</sup> <a name="allocation_id_input" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.property.allocationIdInput"></a>

```python
allocation_id_input: str
```

- *Type:* str

---

##### `ipv6_address_input`<sup>Optional</sup> <a name="ipv6_address_input" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.property.ipv6AddressInput"></a>

```python
ipv6_address_input: str
```

- *Type:* str

---

##### `private_ipv4_address_input`<sup>Optional</sup> <a name="private_ipv4_address_input" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.property.privateIpv4AddressInput"></a>

```python
private_ipv4_address_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `allocation_id`<sup>Required</sup> <a name="allocation_id" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.property.allocationId"></a>

```python
allocation_id: str
```

- *Type:* str

---

##### `ipv6_address`<sup>Required</sup> <a name="ipv6_address" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.property.ipv6Address"></a>

```python
ipv6_address: str
```

- *Type:* str

---

##### `private_ipv4_address`<sup>Required</sup> <a name="private_ipv4_address" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.property.privateIpv4Address"></a>

```python
private_ipv4_address: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lb.LbSubnetMappingOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[LbSubnetMapping, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.lb.LbSubnetMapping">LbSubnetMapping</a>, cdktf.IResolvable]

---


### LbTimeoutsOutputReference <a name="LbTimeoutsOutputReference" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lb

lb.LbTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lb.LbTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lb.LbTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lb.LbTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lb.LbTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lb.LbTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lb.LbTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lb.LbTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lb.LbTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.lb.LbTimeouts">LbTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.lb.LbTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[LbTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.lb.LbTimeouts">LbTimeouts</a>, cdktf.IResolvable]

---



