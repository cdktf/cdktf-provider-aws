# `route53HealthCheck` Submodule <a name="`route53HealthCheck` Submodule" id="@cdktf/provider-aws.route53HealthCheck"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53HealthCheck <a name="Route53HealthCheck" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check aws_route53_health_check}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_health_check.Route53HealthCheck;

Route53HealthCheck.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .type(java.lang.String)
//  .childHealthchecks(java.util.List<java.lang.String>)
//  .childHealthThreshold(java.lang.Number)
//  .cloudwatchAlarmName(java.lang.String)
//  .cloudwatchAlarmRegion(java.lang.String)
//  .disabled(java.lang.Boolean)
//  .disabled(IResolvable)
//  .enableSni(java.lang.Boolean)
//  .enableSni(IResolvable)
//  .failureThreshold(java.lang.Number)
//  .fqdn(java.lang.String)
//  .id(java.lang.String)
//  .insufficientDataHealthStatus(java.lang.String)
//  .invertHealthcheck(java.lang.Boolean)
//  .invertHealthcheck(IResolvable)
//  .ipAddress(java.lang.String)
//  .measureLatency(java.lang.Boolean)
//  .measureLatency(IResolvable)
//  .port(java.lang.Number)
//  .referenceName(java.lang.String)
//  .regions(java.util.List<java.lang.String>)
//  .requestInterval(java.lang.Number)
//  .resourcePath(java.lang.String)
//  .routingControlArn(java.lang.String)
//  .searchString(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#type Route53HealthCheck#type}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.childHealthchecks">childHealthchecks</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#child_healthchecks Route53HealthCheck#child_healthchecks}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.childHealthThreshold">childHealthThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#child_health_threshold Route53HealthCheck#child_health_threshold}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.cloudwatchAlarmName">cloudwatchAlarmName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#cloudwatch_alarm_name Route53HealthCheck#cloudwatch_alarm_name}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.cloudwatchAlarmRegion">cloudwatchAlarmRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#cloudwatch_alarm_region Route53HealthCheck#cloudwatch_alarm_region}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#disabled Route53HealthCheck#disabled}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.enableSni">enableSni</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#enable_sni Route53HealthCheck#enable_sni}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.failureThreshold">failureThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#failure_threshold Route53HealthCheck#failure_threshold}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.fqdn">fqdn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#fqdn Route53HealthCheck#fqdn}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#id Route53HealthCheck#id}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.insufficientDataHealthStatus">insufficientDataHealthStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#insufficient_data_health_status Route53HealthCheck#insufficient_data_health_status}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.invertHealthcheck">invertHealthcheck</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#invert_healthcheck Route53HealthCheck#invert_healthcheck}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#ip_address Route53HealthCheck#ip_address}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.measureLatency">measureLatency</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#measure_latency Route53HealthCheck#measure_latency}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#port Route53HealthCheck#port}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.referenceName">referenceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#reference_name Route53HealthCheck#reference_name}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#regions Route53HealthCheck#regions}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.requestInterval">requestInterval</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#request_interval Route53HealthCheck#request_interval}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.resourcePath">resourcePath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#resource_path Route53HealthCheck#resource_path}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.routingControlArn">routingControlArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#routing_control_arn Route53HealthCheck#routing_control_arn}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.searchString">searchString</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#search_string Route53HealthCheck#search_string}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#tags Route53HealthCheck#tags}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#tags_all Route53HealthCheck#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#type Route53HealthCheck#type}.

---

##### `childHealthchecks`<sup>Optional</sup> <a name="childHealthchecks" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.childHealthchecks"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#child_healthchecks Route53HealthCheck#child_healthchecks}.

---

##### `childHealthThreshold`<sup>Optional</sup> <a name="childHealthThreshold" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.childHealthThreshold"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#child_health_threshold Route53HealthCheck#child_health_threshold}.

---

##### `cloudwatchAlarmName`<sup>Optional</sup> <a name="cloudwatchAlarmName" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.cloudwatchAlarmName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#cloudwatch_alarm_name Route53HealthCheck#cloudwatch_alarm_name}.

---

##### `cloudwatchAlarmRegion`<sup>Optional</sup> <a name="cloudwatchAlarmRegion" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.cloudwatchAlarmRegion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#cloudwatch_alarm_region Route53HealthCheck#cloudwatch_alarm_region}.

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.disabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#disabled Route53HealthCheck#disabled}.

---

##### `enableSni`<sup>Optional</sup> <a name="enableSni" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.enableSni"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#enable_sni Route53HealthCheck#enable_sni}.

---

##### `failureThreshold`<sup>Optional</sup> <a name="failureThreshold" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.failureThreshold"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#failure_threshold Route53HealthCheck#failure_threshold}.

---

##### `fqdn`<sup>Optional</sup> <a name="fqdn" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.fqdn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#fqdn Route53HealthCheck#fqdn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#id Route53HealthCheck#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `insufficientDataHealthStatus`<sup>Optional</sup> <a name="insufficientDataHealthStatus" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.insufficientDataHealthStatus"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#insufficient_data_health_status Route53HealthCheck#insufficient_data_health_status}.

---

##### `invertHealthcheck`<sup>Optional</sup> <a name="invertHealthcheck" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.invertHealthcheck"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#invert_healthcheck Route53HealthCheck#invert_healthcheck}.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.ipAddress"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#ip_address Route53HealthCheck#ip_address}.

---

##### `measureLatency`<sup>Optional</sup> <a name="measureLatency" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.measureLatency"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#measure_latency Route53HealthCheck#measure_latency}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.port"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#port Route53HealthCheck#port}.

---

##### `referenceName`<sup>Optional</sup> <a name="referenceName" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.referenceName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#reference_name Route53HealthCheck#reference_name}.

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.regions"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#regions Route53HealthCheck#regions}.

---

##### `requestInterval`<sup>Optional</sup> <a name="requestInterval" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.requestInterval"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#request_interval Route53HealthCheck#request_interval}.

---

##### `resourcePath`<sup>Optional</sup> <a name="resourcePath" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.resourcePath"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#resource_path Route53HealthCheck#resource_path}.

---

##### `routingControlArn`<sup>Optional</sup> <a name="routingControlArn" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.routingControlArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#routing_control_arn Route53HealthCheck#routing_control_arn}.

---

##### `searchString`<sup>Optional</sup> <a name="searchString" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.searchString"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#search_string Route53HealthCheck#search_string}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#tags Route53HealthCheck#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#tags_all Route53HealthCheck#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetChildHealthchecks">resetChildHealthchecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetChildHealthThreshold">resetChildHealthThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetCloudwatchAlarmName">resetCloudwatchAlarmName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetCloudwatchAlarmRegion">resetCloudwatchAlarmRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetEnableSni">resetEnableSni</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetFailureThreshold">resetFailureThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetFqdn">resetFqdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetInsufficientDataHealthStatus">resetInsufficientDataHealthStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetInvertHealthcheck">resetInvertHealthcheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetMeasureLatency">resetMeasureLatency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetReferenceName">resetReferenceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetRegions">resetRegions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetRequestInterval">resetRequestInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetResourcePath">resetResourcePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetRoutingControlArn">resetRoutingControlArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetSearchString">resetSearchString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetChildHealthchecks` <a name="resetChildHealthchecks" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetChildHealthchecks"></a>

```java
public void resetChildHealthchecks()
```

##### `resetChildHealthThreshold` <a name="resetChildHealthThreshold" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetChildHealthThreshold"></a>

```java
public void resetChildHealthThreshold()
```

##### `resetCloudwatchAlarmName` <a name="resetCloudwatchAlarmName" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetCloudwatchAlarmName"></a>

```java
public void resetCloudwatchAlarmName()
```

##### `resetCloudwatchAlarmRegion` <a name="resetCloudwatchAlarmRegion" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetCloudwatchAlarmRegion"></a>

```java
public void resetCloudwatchAlarmRegion()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetDisabled"></a>

```java
public void resetDisabled()
```

##### `resetEnableSni` <a name="resetEnableSni" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetEnableSni"></a>

```java
public void resetEnableSni()
```

##### `resetFailureThreshold` <a name="resetFailureThreshold" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetFailureThreshold"></a>

```java
public void resetFailureThreshold()
```

##### `resetFqdn` <a name="resetFqdn" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetFqdn"></a>

```java
public void resetFqdn()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetId"></a>

```java
public void resetId()
```

##### `resetInsufficientDataHealthStatus` <a name="resetInsufficientDataHealthStatus" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetInsufficientDataHealthStatus"></a>

```java
public void resetInsufficientDataHealthStatus()
```

##### `resetInvertHealthcheck` <a name="resetInvertHealthcheck" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetInvertHealthcheck"></a>

```java
public void resetInvertHealthcheck()
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetIpAddress"></a>

```java
public void resetIpAddress()
```

##### `resetMeasureLatency` <a name="resetMeasureLatency" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetMeasureLatency"></a>

```java
public void resetMeasureLatency()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetPort"></a>

```java
public void resetPort()
```

##### `resetReferenceName` <a name="resetReferenceName" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetReferenceName"></a>

```java
public void resetReferenceName()
```

##### `resetRegions` <a name="resetRegions" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetRegions"></a>

```java
public void resetRegions()
```

##### `resetRequestInterval` <a name="resetRequestInterval" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetRequestInterval"></a>

```java
public void resetRequestInterval()
```

##### `resetResourcePath` <a name="resetResourcePath" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetResourcePath"></a>

```java
public void resetResourcePath()
```

##### `resetRoutingControlArn` <a name="resetRoutingControlArn" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetRoutingControlArn"></a>

```java
public void resetRoutingControlArn()
```

##### `resetSearchString` <a name="resetSearchString" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetSearchString"></a>

```java
public void resetSearchString()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_health_check.Route53HealthCheck;

Route53HealthCheck.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_health_check.Route53HealthCheck;

Route53HealthCheck.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_health_check.Route53HealthCheck;

Route53HealthCheck.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.childHealthchecksInput">childHealthchecksInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.childHealthThresholdInput">childHealthThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.cloudwatchAlarmNameInput">cloudwatchAlarmNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.cloudwatchAlarmRegionInput">cloudwatchAlarmRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.enableSniInput">enableSniInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.failureThresholdInput">failureThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.fqdnInput">fqdnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.insufficientDataHealthStatusInput">insufficientDataHealthStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.invertHealthcheckInput">invertHealthcheckInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.ipAddressInput">ipAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.measureLatencyInput">measureLatencyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.referenceNameInput">referenceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.regionsInput">regionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.requestIntervalInput">requestIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.resourcePathInput">resourcePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.routingControlArnInput">routingControlArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.searchStringInput">searchStringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.childHealthchecks">childHealthchecks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.childHealthThreshold">childHealthThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.cloudwatchAlarmName">cloudwatchAlarmName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.cloudwatchAlarmRegion">cloudwatchAlarmRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.enableSni">enableSni</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.failureThreshold">failureThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.insufficientDataHealthStatus">insufficientDataHealthStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.invertHealthcheck">invertHealthcheck</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.measureLatency">measureLatency</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.referenceName">referenceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.requestInterval">requestInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.resourcePath">resourcePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.routingControlArn">routingControlArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.searchString">searchString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `childHealthchecksInput`<sup>Optional</sup> <a name="childHealthchecksInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.childHealthchecksInput"></a>

```java
public java.util.List<java.lang.String> getChildHealthchecksInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `childHealthThresholdInput`<sup>Optional</sup> <a name="childHealthThresholdInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.childHealthThresholdInput"></a>

```java
public java.lang.Number getChildHealthThresholdInput();
```

- *Type:* java.lang.Number

---

##### `cloudwatchAlarmNameInput`<sup>Optional</sup> <a name="cloudwatchAlarmNameInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.cloudwatchAlarmNameInput"></a>

```java
public java.lang.String getCloudwatchAlarmNameInput();
```

- *Type:* java.lang.String

---

##### `cloudwatchAlarmRegionInput`<sup>Optional</sup> <a name="cloudwatchAlarmRegionInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.cloudwatchAlarmRegionInput"></a>

```java
public java.lang.String getCloudwatchAlarmRegionInput();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.disabledInput"></a>

```java
public java.lang.Object getDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableSniInput`<sup>Optional</sup> <a name="enableSniInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.enableSniInput"></a>

```java
public java.lang.Object getEnableSniInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `failureThresholdInput`<sup>Optional</sup> <a name="failureThresholdInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.failureThresholdInput"></a>

```java
public java.lang.Number getFailureThresholdInput();
```

- *Type:* java.lang.Number

---

##### `fqdnInput`<sup>Optional</sup> <a name="fqdnInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.fqdnInput"></a>

```java
public java.lang.String getFqdnInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `insufficientDataHealthStatusInput`<sup>Optional</sup> <a name="insufficientDataHealthStatusInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.insufficientDataHealthStatusInput"></a>

```java
public java.lang.String getInsufficientDataHealthStatusInput();
```

- *Type:* java.lang.String

---

##### `invertHealthcheckInput`<sup>Optional</sup> <a name="invertHealthcheckInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.invertHealthcheckInput"></a>

```java
public java.lang.Object getInvertHealthcheckInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.ipAddressInput"></a>

```java
public java.lang.String getIpAddressInput();
```

- *Type:* java.lang.String

---

##### `measureLatencyInput`<sup>Optional</sup> <a name="measureLatencyInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.measureLatencyInput"></a>

```java
public java.lang.Object getMeasureLatencyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `referenceNameInput`<sup>Optional</sup> <a name="referenceNameInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.referenceNameInput"></a>

```java
public java.lang.String getReferenceNameInput();
```

- *Type:* java.lang.String

---

##### `regionsInput`<sup>Optional</sup> <a name="regionsInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.regionsInput"></a>

```java
public java.util.List<java.lang.String> getRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `requestIntervalInput`<sup>Optional</sup> <a name="requestIntervalInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.requestIntervalInput"></a>

```java
public java.lang.Number getRequestIntervalInput();
```

- *Type:* java.lang.Number

---

##### `resourcePathInput`<sup>Optional</sup> <a name="resourcePathInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.resourcePathInput"></a>

```java
public java.lang.String getResourcePathInput();
```

- *Type:* java.lang.String

---

##### `routingControlArnInput`<sup>Optional</sup> <a name="routingControlArnInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.routingControlArnInput"></a>

```java
public java.lang.String getRoutingControlArnInput();
```

- *Type:* java.lang.String

---

##### `searchStringInput`<sup>Optional</sup> <a name="searchStringInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.searchStringInput"></a>

```java
public java.lang.String getSearchStringInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `childHealthchecks`<sup>Required</sup> <a name="childHealthchecks" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.childHealthchecks"></a>

```java
public java.util.List<java.lang.String> getChildHealthchecks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `childHealthThreshold`<sup>Required</sup> <a name="childHealthThreshold" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.childHealthThreshold"></a>

```java
public java.lang.Number getChildHealthThreshold();
```

- *Type:* java.lang.Number

---

##### `cloudwatchAlarmName`<sup>Required</sup> <a name="cloudwatchAlarmName" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.cloudwatchAlarmName"></a>

```java
public java.lang.String getCloudwatchAlarmName();
```

- *Type:* java.lang.String

---

##### `cloudwatchAlarmRegion`<sup>Required</sup> <a name="cloudwatchAlarmRegion" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.cloudwatchAlarmRegion"></a>

```java
public java.lang.String getCloudwatchAlarmRegion();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableSni`<sup>Required</sup> <a name="enableSni" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.enableSni"></a>

```java
public java.lang.Object getEnableSni();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `failureThreshold`<sup>Required</sup> <a name="failureThreshold" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.failureThreshold"></a>

```java
public java.lang.Number getFailureThreshold();
```

- *Type:* java.lang.Number

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `insufficientDataHealthStatus`<sup>Required</sup> <a name="insufficientDataHealthStatus" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.insufficientDataHealthStatus"></a>

```java
public java.lang.String getInsufficientDataHealthStatus();
```

- *Type:* java.lang.String

---

##### `invertHealthcheck`<sup>Required</sup> <a name="invertHealthcheck" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.invertHealthcheck"></a>

```java
public java.lang.Object getInvertHealthcheck();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `measureLatency`<sup>Required</sup> <a name="measureLatency" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.measureLatency"></a>

```java
public java.lang.Object getMeasureLatency();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `referenceName`<sup>Required</sup> <a name="referenceName" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.referenceName"></a>

```java
public java.lang.String getReferenceName();
```

- *Type:* java.lang.String

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.regions"></a>

```java
public java.util.List<java.lang.String> getRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `requestInterval`<sup>Required</sup> <a name="requestInterval" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.requestInterval"></a>

```java
public java.lang.Number getRequestInterval();
```

- *Type:* java.lang.Number

---

##### `resourcePath`<sup>Required</sup> <a name="resourcePath" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.resourcePath"></a>

```java
public java.lang.String getResourcePath();
```

- *Type:* java.lang.String

---

##### `routingControlArn`<sup>Required</sup> <a name="routingControlArn" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.routingControlArn"></a>

```java
public java.lang.String getRoutingControlArn();
```

- *Type:* java.lang.String

---

##### `searchString`<sup>Required</sup> <a name="searchString" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.searchString"></a>

```java
public java.lang.String getSearchString();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Route53HealthCheckConfig <a name="Route53HealthCheckConfig" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_health_check.Route53HealthCheckConfig;

Route53HealthCheckConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .type(java.lang.String)
//  .childHealthchecks(java.util.List<java.lang.String>)
//  .childHealthThreshold(java.lang.Number)
//  .cloudwatchAlarmName(java.lang.String)
//  .cloudwatchAlarmRegion(java.lang.String)
//  .disabled(java.lang.Boolean)
//  .disabled(IResolvable)
//  .enableSni(java.lang.Boolean)
//  .enableSni(IResolvable)
//  .failureThreshold(java.lang.Number)
//  .fqdn(java.lang.String)
//  .id(java.lang.String)
//  .insufficientDataHealthStatus(java.lang.String)
//  .invertHealthcheck(java.lang.Boolean)
//  .invertHealthcheck(IResolvable)
//  .ipAddress(java.lang.String)
//  .measureLatency(java.lang.Boolean)
//  .measureLatency(IResolvable)
//  .port(java.lang.Number)
//  .referenceName(java.lang.String)
//  .regions(java.util.List<java.lang.String>)
//  .requestInterval(java.lang.Number)
//  .resourcePath(java.lang.String)
//  .routingControlArn(java.lang.String)
//  .searchString(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#type Route53HealthCheck#type}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.childHealthchecks">childHealthchecks</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#child_healthchecks Route53HealthCheck#child_healthchecks}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.childHealthThreshold">childHealthThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#child_health_threshold Route53HealthCheck#child_health_threshold}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.cloudwatchAlarmName">cloudwatchAlarmName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#cloudwatch_alarm_name Route53HealthCheck#cloudwatch_alarm_name}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.cloudwatchAlarmRegion">cloudwatchAlarmRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#cloudwatch_alarm_region Route53HealthCheck#cloudwatch_alarm_region}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.disabled">disabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#disabled Route53HealthCheck#disabled}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.enableSni">enableSni</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#enable_sni Route53HealthCheck#enable_sni}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.failureThreshold">failureThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#failure_threshold Route53HealthCheck#failure_threshold}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#fqdn Route53HealthCheck#fqdn}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#id Route53HealthCheck#id}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.insufficientDataHealthStatus">insufficientDataHealthStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#insufficient_data_health_status Route53HealthCheck#insufficient_data_health_status}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.invertHealthcheck">invertHealthcheck</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#invert_healthcheck Route53HealthCheck#invert_healthcheck}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#ip_address Route53HealthCheck#ip_address}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.measureLatency">measureLatency</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#measure_latency Route53HealthCheck#measure_latency}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#port Route53HealthCheck#port}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.referenceName">referenceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#reference_name Route53HealthCheck#reference_name}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#regions Route53HealthCheck#regions}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.requestInterval">requestInterval</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#request_interval Route53HealthCheck#request_interval}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.resourcePath">resourcePath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#resource_path Route53HealthCheck#resource_path}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.routingControlArn">routingControlArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#routing_control_arn Route53HealthCheck#routing_control_arn}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.searchString">searchString</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#search_string Route53HealthCheck#search_string}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#tags Route53HealthCheck#tags}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#tags_all Route53HealthCheck#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#type Route53HealthCheck#type}.

---

##### `childHealthchecks`<sup>Optional</sup> <a name="childHealthchecks" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.childHealthchecks"></a>

```java
public java.util.List<java.lang.String> getChildHealthchecks();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#child_healthchecks Route53HealthCheck#child_healthchecks}.

---

##### `childHealthThreshold`<sup>Optional</sup> <a name="childHealthThreshold" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.childHealthThreshold"></a>

```java
public java.lang.Number getChildHealthThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#child_health_threshold Route53HealthCheck#child_health_threshold}.

---

##### `cloudwatchAlarmName`<sup>Optional</sup> <a name="cloudwatchAlarmName" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.cloudwatchAlarmName"></a>

```java
public java.lang.String getCloudwatchAlarmName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#cloudwatch_alarm_name Route53HealthCheck#cloudwatch_alarm_name}.

---

##### `cloudwatchAlarmRegion`<sup>Optional</sup> <a name="cloudwatchAlarmRegion" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.cloudwatchAlarmRegion"></a>

```java
public java.lang.String getCloudwatchAlarmRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#cloudwatch_alarm_region Route53HealthCheck#cloudwatch_alarm_region}.

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.disabled"></a>

```java
public java.lang.Object getDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#disabled Route53HealthCheck#disabled}.

---

##### `enableSni`<sup>Optional</sup> <a name="enableSni" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.enableSni"></a>

```java
public java.lang.Object getEnableSni();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#enable_sni Route53HealthCheck#enable_sni}.

---

##### `failureThreshold`<sup>Optional</sup> <a name="failureThreshold" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.failureThreshold"></a>

```java
public java.lang.Number getFailureThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#failure_threshold Route53HealthCheck#failure_threshold}.

---

##### `fqdn`<sup>Optional</sup> <a name="fqdn" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#fqdn Route53HealthCheck#fqdn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#id Route53HealthCheck#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `insufficientDataHealthStatus`<sup>Optional</sup> <a name="insufficientDataHealthStatus" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.insufficientDataHealthStatus"></a>

```java
public java.lang.String getInsufficientDataHealthStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#insufficient_data_health_status Route53HealthCheck#insufficient_data_health_status}.

---

##### `invertHealthcheck`<sup>Optional</sup> <a name="invertHealthcheck" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.invertHealthcheck"></a>

```java
public java.lang.Object getInvertHealthcheck();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#invert_healthcheck Route53HealthCheck#invert_healthcheck}.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#ip_address Route53HealthCheck#ip_address}.

---

##### `measureLatency`<sup>Optional</sup> <a name="measureLatency" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.measureLatency"></a>

```java
public java.lang.Object getMeasureLatency();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#measure_latency Route53HealthCheck#measure_latency}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#port Route53HealthCheck#port}.

---

##### `referenceName`<sup>Optional</sup> <a name="referenceName" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.referenceName"></a>

```java
public java.lang.String getReferenceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#reference_name Route53HealthCheck#reference_name}.

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.regions"></a>

```java
public java.util.List<java.lang.String> getRegions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#regions Route53HealthCheck#regions}.

---

##### `requestInterval`<sup>Optional</sup> <a name="requestInterval" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.requestInterval"></a>

```java
public java.lang.Number getRequestInterval();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#request_interval Route53HealthCheck#request_interval}.

---

##### `resourcePath`<sup>Optional</sup> <a name="resourcePath" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.resourcePath"></a>

```java
public java.lang.String getResourcePath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#resource_path Route53HealthCheck#resource_path}.

---

##### `routingControlArn`<sup>Optional</sup> <a name="routingControlArn" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.routingControlArn"></a>

```java
public java.lang.String getRoutingControlArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#routing_control_arn Route53HealthCheck#routing_control_arn}.

---

##### `searchString`<sup>Optional</sup> <a name="searchString" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.searchString"></a>

```java
public java.lang.String getSearchString();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#search_string Route53HealthCheck#search_string}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#tags Route53HealthCheck#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#tags_all Route53HealthCheck#tags_all}.

---



