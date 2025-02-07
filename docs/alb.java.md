# `alb` Submodule <a name="`alb` Submodule" id="@cdktf/provider-aws.alb"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Alb <a name="Alb" id="@cdktf/provider-aws.alb.Alb"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb aws_alb}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.alb.Alb.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.alb.Alb;

Alb.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .accessLogs(AlbAccessLogs)
//  .clientKeepAlive(java.lang.Number)
//  .connectionLogs(AlbConnectionLogs)
//  .customerOwnedIpv4Pool(java.lang.String)
//  .desyncMitigationMode(java.lang.String)
//  .dnsRecordClientRoutingPolicy(java.lang.String)
//  .dropInvalidHeaderFields(java.lang.Boolean)
//  .dropInvalidHeaderFields(IResolvable)
//  .enableCrossZoneLoadBalancing(java.lang.Boolean)
//  .enableCrossZoneLoadBalancing(IResolvable)
//  .enableDeletionProtection(java.lang.Boolean)
//  .enableDeletionProtection(IResolvable)
//  .enableHttp2(java.lang.Boolean)
//  .enableHttp2(IResolvable)
//  .enableTlsVersionAndCipherSuiteHeaders(java.lang.Boolean)
//  .enableTlsVersionAndCipherSuiteHeaders(IResolvable)
//  .enableWafFailOpen(java.lang.Boolean)
//  .enableWafFailOpen(IResolvable)
//  .enableXffClientPort(java.lang.Boolean)
//  .enableXffClientPort(IResolvable)
//  .enableZonalShift(java.lang.Boolean)
//  .enableZonalShift(IResolvable)
//  .enforceSecurityGroupInboundRulesOnPrivateLinkTraffic(java.lang.String)
//  .id(java.lang.String)
//  .idleTimeout(java.lang.Number)
//  .internal(java.lang.Boolean)
//  .internal(IResolvable)
//  .ipAddressType(java.lang.String)
//  .loadBalancerType(java.lang.String)
//  .name(java.lang.String)
//  .namePrefix(java.lang.String)
//  .preserveHostHeader(java.lang.Boolean)
//  .preserveHostHeader(IResolvable)
//  .securityGroups(java.util.List<java.lang.String>)
//  .subnetMapping(IResolvable)
//  .subnetMapping(java.util.List<AlbSubnetMapping>)
//  .subnets(java.util.List<java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(AlbTimeouts)
//  .xffHeaderProcessingMode(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.accessLogs">accessLogs</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogs">AlbAccessLogs</a></code> | access_logs block. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.clientKeepAlive">clientKeepAlive</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#client_keep_alive Alb#client_keep_alive}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.connectionLogs">connectionLogs</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogs">AlbConnectionLogs</a></code> | connection_logs block. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.customerOwnedIpv4Pool">customerOwnedIpv4Pool</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#customer_owned_ipv4_pool Alb#customer_owned_ipv4_pool}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.desyncMitigationMode">desyncMitigationMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#desync_mitigation_mode Alb#desync_mitigation_mode}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.dnsRecordClientRoutingPolicy">dnsRecordClientRoutingPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#dns_record_client_routing_policy Alb#dns_record_client_routing_policy}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.dropInvalidHeaderFields">dropInvalidHeaderFields</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#drop_invalid_header_fields Alb#drop_invalid_header_fields}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.enableCrossZoneLoadBalancing">enableCrossZoneLoadBalancing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#enable_cross_zone_load_balancing Alb#enable_cross_zone_load_balancing}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.enableDeletionProtection">enableDeletionProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#enable_deletion_protection Alb#enable_deletion_protection}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.enableHttp2">enableHttp2</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#enable_http2 Alb#enable_http2}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.enableTlsVersionAndCipherSuiteHeaders">enableTlsVersionAndCipherSuiteHeaders</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#enable_tls_version_and_cipher_suite_headers Alb#enable_tls_version_and_cipher_suite_headers}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.enableWafFailOpen">enableWafFailOpen</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#enable_waf_fail_open Alb#enable_waf_fail_open}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.enableXffClientPort">enableXffClientPort</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#enable_xff_client_port Alb#enable_xff_client_port}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.enableZonalShift">enableZonalShift</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#enable_zonal_shift Alb#enable_zonal_shift}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.enforceSecurityGroupInboundRulesOnPrivateLinkTraffic">enforceSecurityGroupInboundRulesOnPrivateLinkTraffic</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#enforce_security_group_inbound_rules_on_private_link_traffic Alb#enforce_security_group_inbound_rules_on_private_link_traffic}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#id Alb#id}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.idleTimeout">idleTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#idle_timeout Alb#idle_timeout}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.internal">internal</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#internal Alb#internal}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#ip_address_type Alb#ip_address_type}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.loadBalancerType">loadBalancerType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#load_balancer_type Alb#load_balancer_type}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#name Alb#name}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#name_prefix Alb#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.preserveHostHeader">preserveHostHeader</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#preserve_host_header Alb#preserve_host_header}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#security_groups Alb#security_groups}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.subnetMapping">subnetMapping</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.alb.AlbSubnetMapping">AlbSubnetMapping</a>></code> | subnet_mapping block. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#subnets Alb#subnets}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#tags Alb#tags}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#tags_all Alb#tags_all}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbTimeouts">AlbTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.xffHeaderProcessingMode">xffHeaderProcessingMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#xff_header_processing_mode Alb#xff_header_processing_mode}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessLogs`<sup>Optional</sup> <a name="accessLogs" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.accessLogs"></a>

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbAccessLogs">AlbAccessLogs</a>

access_logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#access_logs Alb#access_logs}

---

##### `clientKeepAlive`<sup>Optional</sup> <a name="clientKeepAlive" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.clientKeepAlive"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#client_keep_alive Alb#client_keep_alive}.

---

##### `connectionLogs`<sup>Optional</sup> <a name="connectionLogs" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.connectionLogs"></a>

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbConnectionLogs">AlbConnectionLogs</a>

connection_logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#connection_logs Alb#connection_logs}

---

##### `customerOwnedIpv4Pool`<sup>Optional</sup> <a name="customerOwnedIpv4Pool" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.customerOwnedIpv4Pool"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#customer_owned_ipv4_pool Alb#customer_owned_ipv4_pool}.

---

##### `desyncMitigationMode`<sup>Optional</sup> <a name="desyncMitigationMode" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.desyncMitigationMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#desync_mitigation_mode Alb#desync_mitigation_mode}.

---

##### `dnsRecordClientRoutingPolicy`<sup>Optional</sup> <a name="dnsRecordClientRoutingPolicy" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.dnsRecordClientRoutingPolicy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#dns_record_client_routing_policy Alb#dns_record_client_routing_policy}.

---

##### `dropInvalidHeaderFields`<sup>Optional</sup> <a name="dropInvalidHeaderFields" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.dropInvalidHeaderFields"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#drop_invalid_header_fields Alb#drop_invalid_header_fields}.

---

##### `enableCrossZoneLoadBalancing`<sup>Optional</sup> <a name="enableCrossZoneLoadBalancing" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.enableCrossZoneLoadBalancing"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#enable_cross_zone_load_balancing Alb#enable_cross_zone_load_balancing}.

---

##### `enableDeletionProtection`<sup>Optional</sup> <a name="enableDeletionProtection" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.enableDeletionProtection"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#enable_deletion_protection Alb#enable_deletion_protection}.

---

##### `enableHttp2`<sup>Optional</sup> <a name="enableHttp2" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.enableHttp2"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#enable_http2 Alb#enable_http2}.

---

##### `enableTlsVersionAndCipherSuiteHeaders`<sup>Optional</sup> <a name="enableTlsVersionAndCipherSuiteHeaders" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.enableTlsVersionAndCipherSuiteHeaders"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#enable_tls_version_and_cipher_suite_headers Alb#enable_tls_version_and_cipher_suite_headers}.

---

##### `enableWafFailOpen`<sup>Optional</sup> <a name="enableWafFailOpen" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.enableWafFailOpen"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#enable_waf_fail_open Alb#enable_waf_fail_open}.

---

##### `enableXffClientPort`<sup>Optional</sup> <a name="enableXffClientPort" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.enableXffClientPort"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#enable_xff_client_port Alb#enable_xff_client_port}.

---

##### `enableZonalShift`<sup>Optional</sup> <a name="enableZonalShift" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.enableZonalShift"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#enable_zonal_shift Alb#enable_zonal_shift}.

---

##### `enforceSecurityGroupInboundRulesOnPrivateLinkTraffic`<sup>Optional</sup> <a name="enforceSecurityGroupInboundRulesOnPrivateLinkTraffic" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.enforceSecurityGroupInboundRulesOnPrivateLinkTraffic"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#enforce_security_group_inbound_rules_on_private_link_traffic Alb#enforce_security_group_inbound_rules_on_private_link_traffic}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#id Alb#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idleTimeout`<sup>Optional</sup> <a name="idleTimeout" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.idleTimeout"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#idle_timeout Alb#idle_timeout}.

---

##### `internal`<sup>Optional</sup> <a name="internal" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.internal"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#internal Alb#internal}.

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.ipAddressType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#ip_address_type Alb#ip_address_type}.

---

##### `loadBalancerType`<sup>Optional</sup> <a name="loadBalancerType" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.loadBalancerType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#load_balancer_type Alb#load_balancer_type}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#name Alb#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.namePrefix"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#name_prefix Alb#name_prefix}.

---

##### `preserveHostHeader`<sup>Optional</sup> <a name="preserveHostHeader" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.preserveHostHeader"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#preserve_host_header Alb#preserve_host_header}.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.securityGroups"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#security_groups Alb#security_groups}.

---

##### `subnetMapping`<sup>Optional</sup> <a name="subnetMapping" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.subnetMapping"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.alb.AlbSubnetMapping">AlbSubnetMapping</a>>

subnet_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#subnet_mapping Alb#subnet_mapping}

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.subnets"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#subnets Alb#subnets}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#tags Alb#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#tags_all Alb#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbTimeouts">AlbTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#timeouts Alb#timeouts}

---

##### `xffHeaderProcessingMode`<sup>Optional</sup> <a name="xffHeaderProcessingMode" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.xffHeaderProcessingMode"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#xff_header_processing_mode Alb#xff_header_processing_mode}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.Alb.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.alb.Alb.putAccessLogs">putAccessLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.putConnectionLogs">putConnectionLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.putSubnetMapping">putSubnetMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetAccessLogs">resetAccessLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetClientKeepAlive">resetClientKeepAlive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetConnectionLogs">resetConnectionLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetCustomerOwnedIpv4Pool">resetCustomerOwnedIpv4Pool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetDesyncMitigationMode">resetDesyncMitigationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetDnsRecordClientRoutingPolicy">resetDnsRecordClientRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetDropInvalidHeaderFields">resetDropInvalidHeaderFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetEnableCrossZoneLoadBalancing">resetEnableCrossZoneLoadBalancing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetEnableDeletionProtection">resetEnableDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetEnableHttp2">resetEnableHttp2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetEnableTlsVersionAndCipherSuiteHeaders">resetEnableTlsVersionAndCipherSuiteHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetEnableWafFailOpen">resetEnableWafFailOpen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetEnableXffClientPort">resetEnableXffClientPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetEnableZonalShift">resetEnableZonalShift</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetEnforceSecurityGroupInboundRulesOnPrivateLinkTraffic">resetEnforceSecurityGroupInboundRulesOnPrivateLinkTraffic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetIdleTimeout">resetIdleTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetInternal">resetInternal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetIpAddressType">resetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetLoadBalancerType">resetLoadBalancerType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetPreserveHostHeader">resetPreserveHostHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetSubnetMapping">resetSubnetMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetSubnets">resetSubnets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetXffHeaderProcessingMode">resetXffHeaderProcessingMode</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.alb.Alb.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.alb.Alb.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.alb.Alb.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.alb.Alb.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.alb.Alb.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.alb.Alb.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.alb.Alb.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.alb.Alb.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.alb.Alb.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.alb.Alb.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.alb.Alb.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.alb.Alb.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.alb.Alb.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.Alb.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.alb.Alb.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.Alb.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.alb.Alb.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.Alb.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.alb.Alb.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.Alb.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.alb.Alb.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.Alb.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.alb.Alb.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.Alb.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.alb.Alb.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.Alb.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.alb.Alb.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.Alb.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.alb.Alb.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.Alb.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.alb.Alb.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.alb.Alb.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.alb.Alb.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.alb.Alb.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.alb.Alb.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.Alb.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.alb.Alb.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.alb.Alb.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.alb.Alb.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.alb.Alb.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.alb.Alb.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.alb.Alb.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.alb.Alb.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccessLogs` <a name="putAccessLogs" id="@cdktf/provider-aws.alb.Alb.putAccessLogs"></a>

```java
public void putAccessLogs(AlbAccessLogs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.alb.Alb.putAccessLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbAccessLogs">AlbAccessLogs</a>

---

##### `putConnectionLogs` <a name="putConnectionLogs" id="@cdktf/provider-aws.alb.Alb.putConnectionLogs"></a>

```java
public void putConnectionLogs(AlbConnectionLogs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.alb.Alb.putConnectionLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbConnectionLogs">AlbConnectionLogs</a>

---

##### `putSubnetMapping` <a name="putSubnetMapping" id="@cdktf/provider-aws.alb.Alb.putSubnetMapping"></a>

```java
public void putSubnetMapping(IResolvable OR java.util.List<AlbSubnetMapping> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.alb.Alb.putSubnetMapping.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.alb.AlbSubnetMapping">AlbSubnetMapping</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.alb.Alb.putTimeouts"></a>

```java
public void putTimeouts(AlbTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.alb.Alb.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbTimeouts">AlbTimeouts</a>

---

##### `resetAccessLogs` <a name="resetAccessLogs" id="@cdktf/provider-aws.alb.Alb.resetAccessLogs"></a>

```java
public void resetAccessLogs()
```

##### `resetClientKeepAlive` <a name="resetClientKeepAlive" id="@cdktf/provider-aws.alb.Alb.resetClientKeepAlive"></a>

```java
public void resetClientKeepAlive()
```

##### `resetConnectionLogs` <a name="resetConnectionLogs" id="@cdktf/provider-aws.alb.Alb.resetConnectionLogs"></a>

```java
public void resetConnectionLogs()
```

##### `resetCustomerOwnedIpv4Pool` <a name="resetCustomerOwnedIpv4Pool" id="@cdktf/provider-aws.alb.Alb.resetCustomerOwnedIpv4Pool"></a>

```java
public void resetCustomerOwnedIpv4Pool()
```

##### `resetDesyncMitigationMode` <a name="resetDesyncMitigationMode" id="@cdktf/provider-aws.alb.Alb.resetDesyncMitigationMode"></a>

```java
public void resetDesyncMitigationMode()
```

##### `resetDnsRecordClientRoutingPolicy` <a name="resetDnsRecordClientRoutingPolicy" id="@cdktf/provider-aws.alb.Alb.resetDnsRecordClientRoutingPolicy"></a>

```java
public void resetDnsRecordClientRoutingPolicy()
```

##### `resetDropInvalidHeaderFields` <a name="resetDropInvalidHeaderFields" id="@cdktf/provider-aws.alb.Alb.resetDropInvalidHeaderFields"></a>

```java
public void resetDropInvalidHeaderFields()
```

##### `resetEnableCrossZoneLoadBalancing` <a name="resetEnableCrossZoneLoadBalancing" id="@cdktf/provider-aws.alb.Alb.resetEnableCrossZoneLoadBalancing"></a>

```java
public void resetEnableCrossZoneLoadBalancing()
```

##### `resetEnableDeletionProtection` <a name="resetEnableDeletionProtection" id="@cdktf/provider-aws.alb.Alb.resetEnableDeletionProtection"></a>

```java
public void resetEnableDeletionProtection()
```

##### `resetEnableHttp2` <a name="resetEnableHttp2" id="@cdktf/provider-aws.alb.Alb.resetEnableHttp2"></a>

```java
public void resetEnableHttp2()
```

##### `resetEnableTlsVersionAndCipherSuiteHeaders` <a name="resetEnableTlsVersionAndCipherSuiteHeaders" id="@cdktf/provider-aws.alb.Alb.resetEnableTlsVersionAndCipherSuiteHeaders"></a>

```java
public void resetEnableTlsVersionAndCipherSuiteHeaders()
```

##### `resetEnableWafFailOpen` <a name="resetEnableWafFailOpen" id="@cdktf/provider-aws.alb.Alb.resetEnableWafFailOpen"></a>

```java
public void resetEnableWafFailOpen()
```

##### `resetEnableXffClientPort` <a name="resetEnableXffClientPort" id="@cdktf/provider-aws.alb.Alb.resetEnableXffClientPort"></a>

```java
public void resetEnableXffClientPort()
```

##### `resetEnableZonalShift` <a name="resetEnableZonalShift" id="@cdktf/provider-aws.alb.Alb.resetEnableZonalShift"></a>

```java
public void resetEnableZonalShift()
```

##### `resetEnforceSecurityGroupInboundRulesOnPrivateLinkTraffic` <a name="resetEnforceSecurityGroupInboundRulesOnPrivateLinkTraffic" id="@cdktf/provider-aws.alb.Alb.resetEnforceSecurityGroupInboundRulesOnPrivateLinkTraffic"></a>

```java
public void resetEnforceSecurityGroupInboundRulesOnPrivateLinkTraffic()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.alb.Alb.resetId"></a>

```java
public void resetId()
```

##### `resetIdleTimeout` <a name="resetIdleTimeout" id="@cdktf/provider-aws.alb.Alb.resetIdleTimeout"></a>

```java
public void resetIdleTimeout()
```

##### `resetInternal` <a name="resetInternal" id="@cdktf/provider-aws.alb.Alb.resetInternal"></a>

```java
public void resetInternal()
```

##### `resetIpAddressType` <a name="resetIpAddressType" id="@cdktf/provider-aws.alb.Alb.resetIpAddressType"></a>

```java
public void resetIpAddressType()
```

##### `resetLoadBalancerType` <a name="resetLoadBalancerType" id="@cdktf/provider-aws.alb.Alb.resetLoadBalancerType"></a>

```java
public void resetLoadBalancerType()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.alb.Alb.resetName"></a>

```java
public void resetName()
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/provider-aws.alb.Alb.resetNamePrefix"></a>

```java
public void resetNamePrefix()
```

##### `resetPreserveHostHeader` <a name="resetPreserveHostHeader" id="@cdktf/provider-aws.alb.Alb.resetPreserveHostHeader"></a>

```java
public void resetPreserveHostHeader()
```

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktf/provider-aws.alb.Alb.resetSecurityGroups"></a>

```java
public void resetSecurityGroups()
```

##### `resetSubnetMapping` <a name="resetSubnetMapping" id="@cdktf/provider-aws.alb.Alb.resetSubnetMapping"></a>

```java
public void resetSubnetMapping()
```

##### `resetSubnets` <a name="resetSubnets" id="@cdktf/provider-aws.alb.Alb.resetSubnets"></a>

```java
public void resetSubnets()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.alb.Alb.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.alb.Alb.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.alb.Alb.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetXffHeaderProcessingMode` <a name="resetXffHeaderProcessingMode" id="@cdktf/provider-aws.alb.Alb.resetXffHeaderProcessingMode"></a>

```java
public void resetXffHeaderProcessingMode()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.Alb.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Alb resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.alb.Alb.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.alb.Alb;

Alb.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.alb.Alb.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.alb.Alb;

Alb.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.alb.Alb.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.alb.Alb.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.alb.Alb;

Alb.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.alb.Alb.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.alb.Alb.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.alb.Alb;

Alb.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Alb.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Alb resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.alb.Alb.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.alb.Alb.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Alb to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.alb.Alb.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Alb that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.alb.Alb.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Alb to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.accessLogs">accessLogs</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference">AlbAccessLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.arnSuffix">arnSuffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.connectionLogs">connectionLogs</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference">AlbConnectionLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.dnsName">dnsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.subnetMapping">subnetMapping</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingList">AlbSubnetMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference">AlbTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.accessLogsInput">accessLogsInput</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogs">AlbAccessLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.clientKeepAliveInput">clientKeepAliveInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.connectionLogsInput">connectionLogsInput</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogs">AlbConnectionLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.customerOwnedIpv4PoolInput">customerOwnedIpv4PoolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.desyncMitigationModeInput">desyncMitigationModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.dnsRecordClientRoutingPolicyInput">dnsRecordClientRoutingPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.dropInvalidHeaderFieldsInput">dropInvalidHeaderFieldsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.enableCrossZoneLoadBalancingInput">enableCrossZoneLoadBalancingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.enableDeletionProtectionInput">enableDeletionProtectionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.enableHttp2Input">enableHttp2Input</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.enableTlsVersionAndCipherSuiteHeadersInput">enableTlsVersionAndCipherSuiteHeadersInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.enableWafFailOpenInput">enableWafFailOpenInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.enableXffClientPortInput">enableXffClientPortInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.enableZonalShiftInput">enableZonalShiftInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.enforceSecurityGroupInboundRulesOnPrivateLinkTrafficInput">enforceSecurityGroupInboundRulesOnPrivateLinkTrafficInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.idleTimeoutInput">idleTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.internalInput">internalInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.ipAddressTypeInput">ipAddressTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.loadBalancerTypeInput">loadBalancerTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.namePrefixInput">namePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.preserveHostHeaderInput">preserveHostHeaderInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.securityGroupsInput">securityGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.subnetMappingInput">subnetMappingInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.alb.AlbSubnetMapping">AlbSubnetMapping</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.subnetsInput">subnetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.alb.AlbTimeouts">AlbTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.xffHeaderProcessingModeInput">xffHeaderProcessingModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.clientKeepAlive">clientKeepAlive</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.customerOwnedIpv4Pool">customerOwnedIpv4Pool</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.desyncMitigationMode">desyncMitigationMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.dnsRecordClientRoutingPolicy">dnsRecordClientRoutingPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.dropInvalidHeaderFields">dropInvalidHeaderFields</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.enableCrossZoneLoadBalancing">enableCrossZoneLoadBalancing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.enableDeletionProtection">enableDeletionProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.enableHttp2">enableHttp2</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.enableTlsVersionAndCipherSuiteHeaders">enableTlsVersionAndCipherSuiteHeaders</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.enableWafFailOpen">enableWafFailOpen</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.enableXffClientPort">enableXffClientPort</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.enableZonalShift">enableZonalShift</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.enforceSecurityGroupInboundRulesOnPrivateLinkTraffic">enforceSecurityGroupInboundRulesOnPrivateLinkTraffic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.idleTimeout">idleTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.internal">internal</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.loadBalancerType">loadBalancerType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.preserveHostHeader">preserveHostHeader</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.xffHeaderProcessingMode">xffHeaderProcessingMode</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.alb.Alb.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.alb.Alb.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.alb.Alb.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.alb.Alb.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.alb.Alb.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.alb.Alb.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.alb.Alb.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.alb.Alb.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.alb.Alb.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.alb.Alb.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.alb.Alb.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.alb.Alb.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.alb.Alb.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.alb.Alb.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessLogs`<sup>Required</sup> <a name="accessLogs" id="@cdktf/provider-aws.alb.Alb.property.accessLogs"></a>

```java
public AlbAccessLogsOutputReference getAccessLogs();
```

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference">AlbAccessLogsOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.alb.Alb.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `arnSuffix`<sup>Required</sup> <a name="arnSuffix" id="@cdktf/provider-aws.alb.Alb.property.arnSuffix"></a>

```java
public java.lang.String getArnSuffix();
```

- *Type:* java.lang.String

---

##### `connectionLogs`<sup>Required</sup> <a name="connectionLogs" id="@cdktf/provider-aws.alb.Alb.property.connectionLogs"></a>

```java
public AlbConnectionLogsOutputReference getConnectionLogs();
```

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference">AlbConnectionLogsOutputReference</a>

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktf/provider-aws.alb.Alb.property.dnsName"></a>

```java
public java.lang.String getDnsName();
```

- *Type:* java.lang.String

---

##### `subnetMapping`<sup>Required</sup> <a name="subnetMapping" id="@cdktf/provider-aws.alb.Alb.property.subnetMapping"></a>

```java
public AlbSubnetMappingList getSubnetMapping();
```

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbSubnetMappingList">AlbSubnetMappingList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.alb.Alb.property.timeouts"></a>

```java
public AlbTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference">AlbTimeoutsOutputReference</a>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-aws.alb.Alb.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-aws.alb.Alb.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

##### `accessLogsInput`<sup>Optional</sup> <a name="accessLogsInput" id="@cdktf/provider-aws.alb.Alb.property.accessLogsInput"></a>

```java
public AlbAccessLogs getAccessLogsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbAccessLogs">AlbAccessLogs</a>

---

##### `clientKeepAliveInput`<sup>Optional</sup> <a name="clientKeepAliveInput" id="@cdktf/provider-aws.alb.Alb.property.clientKeepAliveInput"></a>

```java
public java.lang.Number getClientKeepAliveInput();
```

- *Type:* java.lang.Number

---

##### `connectionLogsInput`<sup>Optional</sup> <a name="connectionLogsInput" id="@cdktf/provider-aws.alb.Alb.property.connectionLogsInput"></a>

```java
public AlbConnectionLogs getConnectionLogsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbConnectionLogs">AlbConnectionLogs</a>

---

##### `customerOwnedIpv4PoolInput`<sup>Optional</sup> <a name="customerOwnedIpv4PoolInput" id="@cdktf/provider-aws.alb.Alb.property.customerOwnedIpv4PoolInput"></a>

```java
public java.lang.String getCustomerOwnedIpv4PoolInput();
```

- *Type:* java.lang.String

---

##### `desyncMitigationModeInput`<sup>Optional</sup> <a name="desyncMitigationModeInput" id="@cdktf/provider-aws.alb.Alb.property.desyncMitigationModeInput"></a>

```java
public java.lang.String getDesyncMitigationModeInput();
```

- *Type:* java.lang.String

---

##### `dnsRecordClientRoutingPolicyInput`<sup>Optional</sup> <a name="dnsRecordClientRoutingPolicyInput" id="@cdktf/provider-aws.alb.Alb.property.dnsRecordClientRoutingPolicyInput"></a>

```java
public java.lang.String getDnsRecordClientRoutingPolicyInput();
```

- *Type:* java.lang.String

---

##### `dropInvalidHeaderFieldsInput`<sup>Optional</sup> <a name="dropInvalidHeaderFieldsInput" id="@cdktf/provider-aws.alb.Alb.property.dropInvalidHeaderFieldsInput"></a>

```java
public java.lang.Object getDropInvalidHeaderFieldsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableCrossZoneLoadBalancingInput`<sup>Optional</sup> <a name="enableCrossZoneLoadBalancingInput" id="@cdktf/provider-aws.alb.Alb.property.enableCrossZoneLoadBalancingInput"></a>

```java
public java.lang.Object getEnableCrossZoneLoadBalancingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableDeletionProtectionInput`<sup>Optional</sup> <a name="enableDeletionProtectionInput" id="@cdktf/provider-aws.alb.Alb.property.enableDeletionProtectionInput"></a>

```java
public java.lang.Object getEnableDeletionProtectionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableHttp2Input`<sup>Optional</sup> <a name="enableHttp2Input" id="@cdktf/provider-aws.alb.Alb.property.enableHttp2Input"></a>

```java
public java.lang.Object getEnableHttp2Input();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableTlsVersionAndCipherSuiteHeadersInput`<sup>Optional</sup> <a name="enableTlsVersionAndCipherSuiteHeadersInput" id="@cdktf/provider-aws.alb.Alb.property.enableTlsVersionAndCipherSuiteHeadersInput"></a>

```java
public java.lang.Object getEnableTlsVersionAndCipherSuiteHeadersInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableWafFailOpenInput`<sup>Optional</sup> <a name="enableWafFailOpenInput" id="@cdktf/provider-aws.alb.Alb.property.enableWafFailOpenInput"></a>

```java
public java.lang.Object getEnableWafFailOpenInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableXffClientPortInput`<sup>Optional</sup> <a name="enableXffClientPortInput" id="@cdktf/provider-aws.alb.Alb.property.enableXffClientPortInput"></a>

```java
public java.lang.Object getEnableXffClientPortInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableZonalShiftInput`<sup>Optional</sup> <a name="enableZonalShiftInput" id="@cdktf/provider-aws.alb.Alb.property.enableZonalShiftInput"></a>

```java
public java.lang.Object getEnableZonalShiftInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enforceSecurityGroupInboundRulesOnPrivateLinkTrafficInput`<sup>Optional</sup> <a name="enforceSecurityGroupInboundRulesOnPrivateLinkTrafficInput" id="@cdktf/provider-aws.alb.Alb.property.enforceSecurityGroupInboundRulesOnPrivateLinkTrafficInput"></a>

```java
public java.lang.String getEnforceSecurityGroupInboundRulesOnPrivateLinkTrafficInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.alb.Alb.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `idleTimeoutInput`<sup>Optional</sup> <a name="idleTimeoutInput" id="@cdktf/provider-aws.alb.Alb.property.idleTimeoutInput"></a>

```java
public java.lang.Number getIdleTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `internalInput`<sup>Optional</sup> <a name="internalInput" id="@cdktf/provider-aws.alb.Alb.property.internalInput"></a>

```java
public java.lang.Object getInternalInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ipAddressTypeInput`<sup>Optional</sup> <a name="ipAddressTypeInput" id="@cdktf/provider-aws.alb.Alb.property.ipAddressTypeInput"></a>

```java
public java.lang.String getIpAddressTypeInput();
```

- *Type:* java.lang.String

---

##### `loadBalancerTypeInput`<sup>Optional</sup> <a name="loadBalancerTypeInput" id="@cdktf/provider-aws.alb.Alb.property.loadBalancerTypeInput"></a>

```java
public java.lang.String getLoadBalancerTypeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.alb.Alb.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/provider-aws.alb.Alb.property.namePrefixInput"></a>

```java
public java.lang.String getNamePrefixInput();
```

- *Type:* java.lang.String

---

##### `preserveHostHeaderInput`<sup>Optional</sup> <a name="preserveHostHeaderInput" id="@cdktf/provider-aws.alb.Alb.property.preserveHostHeaderInput"></a>

```java
public java.lang.Object getPreserveHostHeaderInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktf/provider-aws.alb.Alb.property.securityGroupsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetMappingInput`<sup>Optional</sup> <a name="subnetMappingInput" id="@cdktf/provider-aws.alb.Alb.property.subnetMappingInput"></a>

```java
public java.lang.Object getSubnetMappingInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.alb.AlbSubnetMapping">AlbSubnetMapping</a>>

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktf/provider-aws.alb.Alb.property.subnetsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.alb.Alb.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.alb.Alb.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.alb.Alb.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.alb.AlbTimeouts">AlbTimeouts</a>

---

##### `xffHeaderProcessingModeInput`<sup>Optional</sup> <a name="xffHeaderProcessingModeInput" id="@cdktf/provider-aws.alb.Alb.property.xffHeaderProcessingModeInput"></a>

```java
public java.lang.String getXffHeaderProcessingModeInput();
```

- *Type:* java.lang.String

---

##### `clientKeepAlive`<sup>Required</sup> <a name="clientKeepAlive" id="@cdktf/provider-aws.alb.Alb.property.clientKeepAlive"></a>

```java
public java.lang.Number getClientKeepAlive();
```

- *Type:* java.lang.Number

---

##### `customerOwnedIpv4Pool`<sup>Required</sup> <a name="customerOwnedIpv4Pool" id="@cdktf/provider-aws.alb.Alb.property.customerOwnedIpv4Pool"></a>

```java
public java.lang.String getCustomerOwnedIpv4Pool();
```

- *Type:* java.lang.String

---

##### `desyncMitigationMode`<sup>Required</sup> <a name="desyncMitigationMode" id="@cdktf/provider-aws.alb.Alb.property.desyncMitigationMode"></a>

```java
public java.lang.String getDesyncMitigationMode();
```

- *Type:* java.lang.String

---

##### `dnsRecordClientRoutingPolicy`<sup>Required</sup> <a name="dnsRecordClientRoutingPolicy" id="@cdktf/provider-aws.alb.Alb.property.dnsRecordClientRoutingPolicy"></a>

```java
public java.lang.String getDnsRecordClientRoutingPolicy();
```

- *Type:* java.lang.String

---

##### `dropInvalidHeaderFields`<sup>Required</sup> <a name="dropInvalidHeaderFields" id="@cdktf/provider-aws.alb.Alb.property.dropInvalidHeaderFields"></a>

```java
public java.lang.Object getDropInvalidHeaderFields();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableCrossZoneLoadBalancing`<sup>Required</sup> <a name="enableCrossZoneLoadBalancing" id="@cdktf/provider-aws.alb.Alb.property.enableCrossZoneLoadBalancing"></a>

```java
public java.lang.Object getEnableCrossZoneLoadBalancing();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableDeletionProtection`<sup>Required</sup> <a name="enableDeletionProtection" id="@cdktf/provider-aws.alb.Alb.property.enableDeletionProtection"></a>

```java
public java.lang.Object getEnableDeletionProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableHttp2`<sup>Required</sup> <a name="enableHttp2" id="@cdktf/provider-aws.alb.Alb.property.enableHttp2"></a>

```java
public java.lang.Object getEnableHttp2();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableTlsVersionAndCipherSuiteHeaders`<sup>Required</sup> <a name="enableTlsVersionAndCipherSuiteHeaders" id="@cdktf/provider-aws.alb.Alb.property.enableTlsVersionAndCipherSuiteHeaders"></a>

```java
public java.lang.Object getEnableTlsVersionAndCipherSuiteHeaders();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableWafFailOpen`<sup>Required</sup> <a name="enableWafFailOpen" id="@cdktf/provider-aws.alb.Alb.property.enableWafFailOpen"></a>

```java
public java.lang.Object getEnableWafFailOpen();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableXffClientPort`<sup>Required</sup> <a name="enableXffClientPort" id="@cdktf/provider-aws.alb.Alb.property.enableXffClientPort"></a>

```java
public java.lang.Object getEnableXffClientPort();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableZonalShift`<sup>Required</sup> <a name="enableZonalShift" id="@cdktf/provider-aws.alb.Alb.property.enableZonalShift"></a>

```java
public java.lang.Object getEnableZonalShift();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enforceSecurityGroupInboundRulesOnPrivateLinkTraffic`<sup>Required</sup> <a name="enforceSecurityGroupInboundRulesOnPrivateLinkTraffic" id="@cdktf/provider-aws.alb.Alb.property.enforceSecurityGroupInboundRulesOnPrivateLinkTraffic"></a>

```java
public java.lang.String getEnforceSecurityGroupInboundRulesOnPrivateLinkTraffic();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.alb.Alb.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `idleTimeout`<sup>Required</sup> <a name="idleTimeout" id="@cdktf/provider-aws.alb.Alb.property.idleTimeout"></a>

```java
public java.lang.Number getIdleTimeout();
```

- *Type:* java.lang.Number

---

##### `internal`<sup>Required</sup> <a name="internal" id="@cdktf/provider-aws.alb.Alb.property.internal"></a>

```java
public java.lang.Object getInternal();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktf/provider-aws.alb.Alb.property.ipAddressType"></a>

```java
public java.lang.String getIpAddressType();
```

- *Type:* java.lang.String

---

##### `loadBalancerType`<sup>Required</sup> <a name="loadBalancerType" id="@cdktf/provider-aws.alb.Alb.property.loadBalancerType"></a>

```java
public java.lang.String getLoadBalancerType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.alb.Alb.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/provider-aws.alb.Alb.property.namePrefix"></a>

```java
public java.lang.String getNamePrefix();
```

- *Type:* java.lang.String

---

##### `preserveHostHeader`<sup>Required</sup> <a name="preserveHostHeader" id="@cdktf/provider-aws.alb.Alb.property.preserveHostHeader"></a>

```java
public java.lang.Object getPreserveHostHeader();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktf/provider-aws.alb.Alb.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.alb.Alb.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.alb.Alb.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.alb.Alb.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `xffHeaderProcessingMode`<sup>Required</sup> <a name="xffHeaderProcessingMode" id="@cdktf/provider-aws.alb.Alb.property.xffHeaderProcessingMode"></a>

```java
public java.lang.String getXffHeaderProcessingMode();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.alb.Alb.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AlbAccessLogs <a name="AlbAccessLogs" id="@cdktf/provider-aws.alb.AlbAccessLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.alb.AlbAccessLogs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.alb.AlbAccessLogs;

AlbAccessLogs.builder()
    .bucket(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .prefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogs.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#bucket Alb#bucket}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogs.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#enabled Alb#enabled}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogs.property.prefix">prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#prefix Alb#prefix}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.alb.AlbAccessLogs.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#bucket Alb#bucket}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.alb.AlbAccessLogs.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#enabled Alb#enabled}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.alb.AlbAccessLogs.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#prefix Alb#prefix}.

---

### AlbConfig <a name="AlbConfig" id="@cdktf/provider-aws.alb.AlbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.alb.AlbConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.alb.AlbConfig;

AlbConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
//  .accessLogs(AlbAccessLogs)
//  .clientKeepAlive(java.lang.Number)
//  .connectionLogs(AlbConnectionLogs)
//  .customerOwnedIpv4Pool(java.lang.String)
//  .desyncMitigationMode(java.lang.String)
//  .dnsRecordClientRoutingPolicy(java.lang.String)
//  .dropInvalidHeaderFields(java.lang.Boolean)
//  .dropInvalidHeaderFields(IResolvable)
//  .enableCrossZoneLoadBalancing(java.lang.Boolean)
//  .enableCrossZoneLoadBalancing(IResolvable)
//  .enableDeletionProtection(java.lang.Boolean)
//  .enableDeletionProtection(IResolvable)
//  .enableHttp2(java.lang.Boolean)
//  .enableHttp2(IResolvable)
//  .enableTlsVersionAndCipherSuiteHeaders(java.lang.Boolean)
//  .enableTlsVersionAndCipherSuiteHeaders(IResolvable)
//  .enableWafFailOpen(java.lang.Boolean)
//  .enableWafFailOpen(IResolvable)
//  .enableXffClientPort(java.lang.Boolean)
//  .enableXffClientPort(IResolvable)
//  .enableZonalShift(java.lang.Boolean)
//  .enableZonalShift(IResolvable)
//  .enforceSecurityGroupInboundRulesOnPrivateLinkTraffic(java.lang.String)
//  .id(java.lang.String)
//  .idleTimeout(java.lang.Number)
//  .internal(java.lang.Boolean)
//  .internal(IResolvable)
//  .ipAddressType(java.lang.String)
//  .loadBalancerType(java.lang.String)
//  .name(java.lang.String)
//  .namePrefix(java.lang.String)
//  .preserveHostHeader(java.lang.Boolean)
//  .preserveHostHeader(IResolvable)
//  .securityGroups(java.util.List<java.lang.String>)
//  .subnetMapping(IResolvable)
//  .subnetMapping(java.util.List<AlbSubnetMapping>)
//  .subnets(java.util.List<java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(AlbTimeouts)
//  .xffHeaderProcessingMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.accessLogs">accessLogs</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogs">AlbAccessLogs</a></code> | access_logs block. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.clientKeepAlive">clientKeepAlive</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#client_keep_alive Alb#client_keep_alive}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.connectionLogs">connectionLogs</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogs">AlbConnectionLogs</a></code> | connection_logs block. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.customerOwnedIpv4Pool">customerOwnedIpv4Pool</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#customer_owned_ipv4_pool Alb#customer_owned_ipv4_pool}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.desyncMitigationMode">desyncMitigationMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#desync_mitigation_mode Alb#desync_mitigation_mode}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.dnsRecordClientRoutingPolicy">dnsRecordClientRoutingPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#dns_record_client_routing_policy Alb#dns_record_client_routing_policy}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.dropInvalidHeaderFields">dropInvalidHeaderFields</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#drop_invalid_header_fields Alb#drop_invalid_header_fields}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.enableCrossZoneLoadBalancing">enableCrossZoneLoadBalancing</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#enable_cross_zone_load_balancing Alb#enable_cross_zone_load_balancing}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.enableDeletionProtection">enableDeletionProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#enable_deletion_protection Alb#enable_deletion_protection}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.enableHttp2">enableHttp2</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#enable_http2 Alb#enable_http2}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.enableTlsVersionAndCipherSuiteHeaders">enableTlsVersionAndCipherSuiteHeaders</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#enable_tls_version_and_cipher_suite_headers Alb#enable_tls_version_and_cipher_suite_headers}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.enableWafFailOpen">enableWafFailOpen</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#enable_waf_fail_open Alb#enable_waf_fail_open}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.enableXffClientPort">enableXffClientPort</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#enable_xff_client_port Alb#enable_xff_client_port}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.enableZonalShift">enableZonalShift</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#enable_zonal_shift Alb#enable_zonal_shift}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.enforceSecurityGroupInboundRulesOnPrivateLinkTraffic">enforceSecurityGroupInboundRulesOnPrivateLinkTraffic</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#enforce_security_group_inbound_rules_on_private_link_traffic Alb#enforce_security_group_inbound_rules_on_private_link_traffic}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#id Alb#id}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.idleTimeout">idleTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#idle_timeout Alb#idle_timeout}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.internal">internal</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#internal Alb#internal}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.ipAddressType">ipAddressType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#ip_address_type Alb#ip_address_type}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.loadBalancerType">loadBalancerType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#load_balancer_type Alb#load_balancer_type}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#name Alb#name}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#name_prefix Alb#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.preserveHostHeader">preserveHostHeader</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#preserve_host_header Alb#preserve_host_header}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#security_groups Alb#security_groups}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.subnetMapping">subnetMapping</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.alb.AlbSubnetMapping">AlbSubnetMapping</a>></code> | subnet_mapping block. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#subnets Alb#subnets}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#tags Alb#tags}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#tags_all Alb#tags_all}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbTimeouts">AlbTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.xffHeaderProcessingMode">xffHeaderProcessingMode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#xff_header_processing_mode Alb#xff_header_processing_mode}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.alb.AlbConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.alb.AlbConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.alb.AlbConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.alb.AlbConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.alb.AlbConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.alb.AlbConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.alb.AlbConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessLogs`<sup>Optional</sup> <a name="accessLogs" id="@cdktf/provider-aws.alb.AlbConfig.property.accessLogs"></a>

```java
public AlbAccessLogs getAccessLogs();
```

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbAccessLogs">AlbAccessLogs</a>

access_logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#access_logs Alb#access_logs}

---

##### `clientKeepAlive`<sup>Optional</sup> <a name="clientKeepAlive" id="@cdktf/provider-aws.alb.AlbConfig.property.clientKeepAlive"></a>

```java
public java.lang.Number getClientKeepAlive();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#client_keep_alive Alb#client_keep_alive}.

---

##### `connectionLogs`<sup>Optional</sup> <a name="connectionLogs" id="@cdktf/provider-aws.alb.AlbConfig.property.connectionLogs"></a>

```java
public AlbConnectionLogs getConnectionLogs();
```

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbConnectionLogs">AlbConnectionLogs</a>

connection_logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#connection_logs Alb#connection_logs}

---

##### `customerOwnedIpv4Pool`<sup>Optional</sup> <a name="customerOwnedIpv4Pool" id="@cdktf/provider-aws.alb.AlbConfig.property.customerOwnedIpv4Pool"></a>

```java
public java.lang.String getCustomerOwnedIpv4Pool();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#customer_owned_ipv4_pool Alb#customer_owned_ipv4_pool}.

---

##### `desyncMitigationMode`<sup>Optional</sup> <a name="desyncMitigationMode" id="@cdktf/provider-aws.alb.AlbConfig.property.desyncMitigationMode"></a>

```java
public java.lang.String getDesyncMitigationMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#desync_mitigation_mode Alb#desync_mitigation_mode}.

---

##### `dnsRecordClientRoutingPolicy`<sup>Optional</sup> <a name="dnsRecordClientRoutingPolicy" id="@cdktf/provider-aws.alb.AlbConfig.property.dnsRecordClientRoutingPolicy"></a>

```java
public java.lang.String getDnsRecordClientRoutingPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#dns_record_client_routing_policy Alb#dns_record_client_routing_policy}.

---

##### `dropInvalidHeaderFields`<sup>Optional</sup> <a name="dropInvalidHeaderFields" id="@cdktf/provider-aws.alb.AlbConfig.property.dropInvalidHeaderFields"></a>

```java
public java.lang.Object getDropInvalidHeaderFields();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#drop_invalid_header_fields Alb#drop_invalid_header_fields}.

---

##### `enableCrossZoneLoadBalancing`<sup>Optional</sup> <a name="enableCrossZoneLoadBalancing" id="@cdktf/provider-aws.alb.AlbConfig.property.enableCrossZoneLoadBalancing"></a>

```java
public java.lang.Object getEnableCrossZoneLoadBalancing();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#enable_cross_zone_load_balancing Alb#enable_cross_zone_load_balancing}.

---

##### `enableDeletionProtection`<sup>Optional</sup> <a name="enableDeletionProtection" id="@cdktf/provider-aws.alb.AlbConfig.property.enableDeletionProtection"></a>

```java
public java.lang.Object getEnableDeletionProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#enable_deletion_protection Alb#enable_deletion_protection}.

---

##### `enableHttp2`<sup>Optional</sup> <a name="enableHttp2" id="@cdktf/provider-aws.alb.AlbConfig.property.enableHttp2"></a>

```java
public java.lang.Object getEnableHttp2();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#enable_http2 Alb#enable_http2}.

---

##### `enableTlsVersionAndCipherSuiteHeaders`<sup>Optional</sup> <a name="enableTlsVersionAndCipherSuiteHeaders" id="@cdktf/provider-aws.alb.AlbConfig.property.enableTlsVersionAndCipherSuiteHeaders"></a>

```java
public java.lang.Object getEnableTlsVersionAndCipherSuiteHeaders();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#enable_tls_version_and_cipher_suite_headers Alb#enable_tls_version_and_cipher_suite_headers}.

---

##### `enableWafFailOpen`<sup>Optional</sup> <a name="enableWafFailOpen" id="@cdktf/provider-aws.alb.AlbConfig.property.enableWafFailOpen"></a>

```java
public java.lang.Object getEnableWafFailOpen();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#enable_waf_fail_open Alb#enable_waf_fail_open}.

---

##### `enableXffClientPort`<sup>Optional</sup> <a name="enableXffClientPort" id="@cdktf/provider-aws.alb.AlbConfig.property.enableXffClientPort"></a>

```java
public java.lang.Object getEnableXffClientPort();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#enable_xff_client_port Alb#enable_xff_client_port}.

---

##### `enableZonalShift`<sup>Optional</sup> <a name="enableZonalShift" id="@cdktf/provider-aws.alb.AlbConfig.property.enableZonalShift"></a>

```java
public java.lang.Object getEnableZonalShift();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#enable_zonal_shift Alb#enable_zonal_shift}.

---

##### `enforceSecurityGroupInboundRulesOnPrivateLinkTraffic`<sup>Optional</sup> <a name="enforceSecurityGroupInboundRulesOnPrivateLinkTraffic" id="@cdktf/provider-aws.alb.AlbConfig.property.enforceSecurityGroupInboundRulesOnPrivateLinkTraffic"></a>

```java
public java.lang.String getEnforceSecurityGroupInboundRulesOnPrivateLinkTraffic();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#enforce_security_group_inbound_rules_on_private_link_traffic Alb#enforce_security_group_inbound_rules_on_private_link_traffic}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.alb.AlbConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#id Alb#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idleTimeout`<sup>Optional</sup> <a name="idleTimeout" id="@cdktf/provider-aws.alb.AlbConfig.property.idleTimeout"></a>

```java
public java.lang.Number getIdleTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#idle_timeout Alb#idle_timeout}.

---

##### `internal`<sup>Optional</sup> <a name="internal" id="@cdktf/provider-aws.alb.AlbConfig.property.internal"></a>

```java
public java.lang.Object getInternal();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#internal Alb#internal}.

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktf/provider-aws.alb.AlbConfig.property.ipAddressType"></a>

```java
public java.lang.String getIpAddressType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#ip_address_type Alb#ip_address_type}.

---

##### `loadBalancerType`<sup>Optional</sup> <a name="loadBalancerType" id="@cdktf/provider-aws.alb.AlbConfig.property.loadBalancerType"></a>

```java
public java.lang.String getLoadBalancerType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#load_balancer_type Alb#load_balancer_type}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.alb.AlbConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#name Alb#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/provider-aws.alb.AlbConfig.property.namePrefix"></a>

```java
public java.lang.String getNamePrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#name_prefix Alb#name_prefix}.

---

##### `preserveHostHeader`<sup>Optional</sup> <a name="preserveHostHeader" id="@cdktf/provider-aws.alb.AlbConfig.property.preserveHostHeader"></a>

```java
public java.lang.Object getPreserveHostHeader();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#preserve_host_header Alb#preserve_host_header}.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktf/provider-aws.alb.AlbConfig.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#security_groups Alb#security_groups}.

---

##### `subnetMapping`<sup>Optional</sup> <a name="subnetMapping" id="@cdktf/provider-aws.alb.AlbConfig.property.subnetMapping"></a>

```java
public java.lang.Object getSubnetMapping();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.alb.AlbSubnetMapping">AlbSubnetMapping</a>>

subnet_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#subnet_mapping Alb#subnet_mapping}

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktf/provider-aws.alb.AlbConfig.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#subnets Alb#subnets}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.alb.AlbConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#tags Alb#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.alb.AlbConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#tags_all Alb#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.alb.AlbConfig.property.timeouts"></a>

```java
public AlbTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbTimeouts">AlbTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#timeouts Alb#timeouts}

---

##### `xffHeaderProcessingMode`<sup>Optional</sup> <a name="xffHeaderProcessingMode" id="@cdktf/provider-aws.alb.AlbConfig.property.xffHeaderProcessingMode"></a>

```java
public java.lang.String getXffHeaderProcessingMode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#xff_header_processing_mode Alb#xff_header_processing_mode}.

---

### AlbConnectionLogs <a name="AlbConnectionLogs" id="@cdktf/provider-aws.alb.AlbConnectionLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.alb.AlbConnectionLogs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.alb.AlbConnectionLogs;

AlbConnectionLogs.builder()
    .bucket(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .prefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogs.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#bucket Alb#bucket}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogs.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#enabled Alb#enabled}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogs.property.prefix">prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#prefix Alb#prefix}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.alb.AlbConnectionLogs.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#bucket Alb#bucket}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.alb.AlbConnectionLogs.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#enabled Alb#enabled}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.alb.AlbConnectionLogs.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#prefix Alb#prefix}.

---

### AlbSubnetMapping <a name="AlbSubnetMapping" id="@cdktf/provider-aws.alb.AlbSubnetMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.alb.AlbSubnetMapping.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.alb.AlbSubnetMapping;

AlbSubnetMapping.builder()
    .subnetId(java.lang.String)
//  .allocationId(java.lang.String)
//  .ipv6Address(java.lang.String)
//  .privateIpv4Address(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMapping.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#subnet_id Alb#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMapping.property.allocationId">allocationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#allocation_id Alb#allocation_id}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMapping.property.ipv6Address">ipv6Address</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#ipv6_address Alb#ipv6_address}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMapping.property.privateIpv4Address">privateIpv4Address</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#private_ipv4_address Alb#private_ipv4_address}. |

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-aws.alb.AlbSubnetMapping.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#subnet_id Alb#subnet_id}.

---

##### `allocationId`<sup>Optional</sup> <a name="allocationId" id="@cdktf/provider-aws.alb.AlbSubnetMapping.property.allocationId"></a>

```java
public java.lang.String getAllocationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#allocation_id Alb#allocation_id}.

---

##### `ipv6Address`<sup>Optional</sup> <a name="ipv6Address" id="@cdktf/provider-aws.alb.AlbSubnetMapping.property.ipv6Address"></a>

```java
public java.lang.String getIpv6Address();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#ipv6_address Alb#ipv6_address}.

---

##### `privateIpv4Address`<sup>Optional</sup> <a name="privateIpv4Address" id="@cdktf/provider-aws.alb.AlbSubnetMapping.property.privateIpv4Address"></a>

```java
public java.lang.String getPrivateIpv4Address();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#private_ipv4_address Alb#private_ipv4_address}.

---

### AlbTimeouts <a name="AlbTimeouts" id="@cdktf/provider-aws.alb.AlbTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.alb.AlbTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.alb.AlbTimeouts;

AlbTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#create Alb#create}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#delete Alb#delete}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#update Alb#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.alb.AlbTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#create Alb#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.alb.AlbTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#delete Alb#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.alb.AlbTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.86.0/docs/resources/alb#update Alb#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AlbAccessLogsOutputReference <a name="AlbAccessLogsOutputReference" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.alb.AlbAccessLogsOutputReference;

new AlbAccessLogsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogs">AlbAccessLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.internalValue"></a>

```java
public AlbAccessLogs getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbAccessLogs">AlbAccessLogs</a>

---


### AlbConnectionLogsOutputReference <a name="AlbConnectionLogsOutputReference" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.alb.AlbConnectionLogsOutputReference;

new AlbConnectionLogsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogs">AlbConnectionLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.property.internalValue"></a>

```java
public AlbConnectionLogs getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbConnectionLogs">AlbConnectionLogs</a>

---


### AlbSubnetMappingList <a name="AlbSubnetMappingList" id="@cdktf/provider-aws.alb.AlbSubnetMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.alb.AlbSubnetMappingList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.alb.AlbSubnetMappingList;

new AlbSubnetMappingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.alb.AlbSubnetMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.alb.AlbSubnetMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.alb.AlbSubnetMappingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.alb.AlbSubnetMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.alb.AlbSubnetMappingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.alb.AlbSubnetMappingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.alb.AlbSubnetMappingList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.alb.AlbSubnetMappingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.alb.AlbSubnetMappingList.get"></a>

```java
public AlbSubnetMappingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.alb.AlbSubnetMappingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.alb.AlbSubnetMapping">AlbSubnetMapping</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.alb.AlbSubnetMappingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.alb.AlbSubnetMappingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.alb.AlbSubnetMappingList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.alb.AlbSubnetMapping">AlbSubnetMapping</a>>

---


### AlbSubnetMappingOutputReference <a name="AlbSubnetMappingOutputReference" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.alb.AlbSubnetMappingOutputReference;

new AlbSubnetMappingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.resetAllocationId">resetAllocationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.resetIpv6Address">resetIpv6Address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.resetPrivateIpv4Address">resetPrivateIpv4Address</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllocationId` <a name="resetAllocationId" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.resetAllocationId"></a>

```java
public void resetAllocationId()
```

##### `resetIpv6Address` <a name="resetIpv6Address" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.resetIpv6Address"></a>

```java
public void resetIpv6Address()
```

##### `resetPrivateIpv4Address` <a name="resetPrivateIpv4Address" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.resetPrivateIpv4Address"></a>

```java
public void resetPrivateIpv4Address()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.outpostId">outpostId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.allocationIdInput">allocationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.ipv6AddressInput">ipv6AddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.privateIpv4AddressInput">privateIpv4AddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.allocationId">allocationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.ipv6Address">ipv6Address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.privateIpv4Address">privateIpv4Address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.alb.AlbSubnetMapping">AlbSubnetMapping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `outpostId`<sup>Required</sup> <a name="outpostId" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.outpostId"></a>

```java
public java.lang.String getOutpostId();
```

- *Type:* java.lang.String

---

##### `allocationIdInput`<sup>Optional</sup> <a name="allocationIdInput" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.allocationIdInput"></a>

```java
public java.lang.String getAllocationIdInput();
```

- *Type:* java.lang.String

---

##### `ipv6AddressInput`<sup>Optional</sup> <a name="ipv6AddressInput" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.ipv6AddressInput"></a>

```java
public java.lang.String getIpv6AddressInput();
```

- *Type:* java.lang.String

---

##### `privateIpv4AddressInput`<sup>Optional</sup> <a name="privateIpv4AddressInput" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.privateIpv4AddressInput"></a>

```java
public java.lang.String getPrivateIpv4AddressInput();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `allocationId`<sup>Required</sup> <a name="allocationId" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.allocationId"></a>

```java
public java.lang.String getAllocationId();
```

- *Type:* java.lang.String

---

##### `ipv6Address`<sup>Required</sup> <a name="ipv6Address" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.ipv6Address"></a>

```java
public java.lang.String getIpv6Address();
```

- *Type:* java.lang.String

---

##### `privateIpv4Address`<sup>Required</sup> <a name="privateIpv4Address" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.privateIpv4Address"></a>

```java
public java.lang.String getPrivateIpv4Address();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.alb.AlbSubnetMapping">AlbSubnetMapping</a>

---


### AlbTimeoutsOutputReference <a name="AlbTimeoutsOutputReference" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.alb.AlbTimeoutsOutputReference;

new AlbTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.alb.AlbTimeouts">AlbTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.alb.AlbTimeouts">AlbTimeouts</a>

---



