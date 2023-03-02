# `route53Record` Submodule <a name="`route53Record` Submodule" id="@cdktf/provider-aws.route53Record"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53Record <a name="Route53Record" id="@cdktf/provider-aws.route53Record.Route53Record"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_record aws_route53_record}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53Record.Route53Record.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_record.Route53Record;

Route53Record.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .type(java.lang.String)
    .zoneId(java.lang.String)
//  .alias(Route53RecordAlias)
//  .allowOverwrite(java.lang.Boolean)
//  .allowOverwrite(IResolvable)
//  .cidrRoutingPolicy(Route53RecordCidrRoutingPolicy)
//  .failoverRoutingPolicy(Route53RecordFailoverRoutingPolicy)
//  .geolocationRoutingPolicy(Route53RecordGeolocationRoutingPolicy)
//  .healthCheckId(java.lang.String)
//  .id(java.lang.String)
//  .latencyRoutingPolicy(Route53RecordLatencyRoutingPolicy)
//  .multivalueAnswerRoutingPolicy(java.lang.Boolean)
//  .multivalueAnswerRoutingPolicy(IResolvable)
//  .records(java.util.List<java.lang.String>)
//  .setIdentifier(java.lang.String)
//  .ttl(java.lang.Number)
//  .weightedRoutingPolicy(Route53RecordWeightedRoutingPolicy)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#name Route53Record#name}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#type Route53Record#type}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#zone_id Route53Record#zone_id}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.alias">alias</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAlias">Route53RecordAlias</a></code> | alias block. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.allowOverwrite">allowOverwrite</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#allow_overwrite Route53Record#allow_overwrite}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.cidrRoutingPolicy">cidrRoutingPolicy</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicy">Route53RecordCidrRoutingPolicy</a></code> | cidr_routing_policy block. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.failoverRoutingPolicy">failoverRoutingPolicy</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicy">Route53RecordFailoverRoutingPolicy</a></code> | failover_routing_policy block. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.geolocationRoutingPolicy">geolocationRoutingPolicy</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy">Route53RecordGeolocationRoutingPolicy</a></code> | geolocation_routing_policy block. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.healthCheckId">healthCheckId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#health_check_id Route53Record#health_check_id}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#id Route53Record#id}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.latencyRoutingPolicy">latencyRoutingPolicy</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicy">Route53RecordLatencyRoutingPolicy</a></code> | latency_routing_policy block. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.multivalueAnswerRoutingPolicy">multivalueAnswerRoutingPolicy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#multivalue_answer_routing_policy Route53Record#multivalue_answer_routing_policy}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.records">records</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#records Route53Record#records}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.setIdentifier">setIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#set_identifier Route53Record#set_identifier}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.ttl">ttl</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#ttl Route53Record#ttl}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.weightedRoutingPolicy">weightedRoutingPolicy</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicy">Route53RecordWeightedRoutingPolicy</a></code> | weighted_routing_policy block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#name Route53Record#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#type Route53Record#type}.

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#zone_id Route53Record#zone_id}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.alias"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordAlias">Route53RecordAlias</a>

alias block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#alias Route53Record#alias}

---

##### `allowOverwrite`<sup>Optional</sup> <a name="allowOverwrite" id="@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.allowOverwrite"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#allow_overwrite Route53Record#allow_overwrite}.

---

##### `cidrRoutingPolicy`<sup>Optional</sup> <a name="cidrRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.cidrRoutingPolicy"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicy">Route53RecordCidrRoutingPolicy</a>

cidr_routing_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#cidr_routing_policy Route53Record#cidr_routing_policy}

---

##### `failoverRoutingPolicy`<sup>Optional</sup> <a name="failoverRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.failoverRoutingPolicy"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicy">Route53RecordFailoverRoutingPolicy</a>

failover_routing_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#failover_routing_policy Route53Record#failover_routing_policy}

---

##### `geolocationRoutingPolicy`<sup>Optional</sup> <a name="geolocationRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.geolocationRoutingPolicy"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy">Route53RecordGeolocationRoutingPolicy</a>

geolocation_routing_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#geolocation_routing_policy Route53Record#geolocation_routing_policy}

---

##### `healthCheckId`<sup>Optional</sup> <a name="healthCheckId" id="@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.healthCheckId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#health_check_id Route53Record#health_check_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#id Route53Record#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `latencyRoutingPolicy`<sup>Optional</sup> <a name="latencyRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.latencyRoutingPolicy"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicy">Route53RecordLatencyRoutingPolicy</a>

latency_routing_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#latency_routing_policy Route53Record#latency_routing_policy}

---

##### `multivalueAnswerRoutingPolicy`<sup>Optional</sup> <a name="multivalueAnswerRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.multivalueAnswerRoutingPolicy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#multivalue_answer_routing_policy Route53Record#multivalue_answer_routing_policy}.

---

##### `records`<sup>Optional</sup> <a name="records" id="@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.records"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#records Route53Record#records}.

---

##### `setIdentifier`<sup>Optional</sup> <a name="setIdentifier" id="@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.setIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#set_identifier Route53Record#set_identifier}.

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.ttl"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#ttl Route53Record#ttl}.

---

##### `weightedRoutingPolicy`<sup>Optional</sup> <a name="weightedRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.weightedRoutingPolicy"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicy">Route53RecordWeightedRoutingPolicy</a>

weighted_routing_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#weighted_routing_policy Route53Record#weighted_routing_policy}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.putAlias">putAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.putCidrRoutingPolicy">putCidrRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.putFailoverRoutingPolicy">putFailoverRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.putGeolocationRoutingPolicy">putGeolocationRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.putLatencyRoutingPolicy">putLatencyRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.putWeightedRoutingPolicy">putWeightedRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.resetAllowOverwrite">resetAllowOverwrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.resetCidrRoutingPolicy">resetCidrRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.resetFailoverRoutingPolicy">resetFailoverRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.resetGeolocationRoutingPolicy">resetGeolocationRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.resetHealthCheckId">resetHealthCheckId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.resetLatencyRoutingPolicy">resetLatencyRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.resetMultivalueAnswerRoutingPolicy">resetMultivalueAnswerRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.resetRecords">resetRecords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.resetSetIdentifier">resetSetIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.resetTtl">resetTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.resetWeightedRoutingPolicy">resetWeightedRoutingPolicy</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53Record.Route53Record.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.route53Record.Route53Record.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.route53Record.Route53Record.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53Record.Route53Record.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.route53Record.Route53Record.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.route53Record.Route53Record.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.route53Record.Route53Record.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.route53Record.Route53Record.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.route53Record.Route53Record.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53Record.Route53Record.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53Record.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53Record.Route53Record.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53Record.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53Record.Route53Record.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53Record.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53Record.Route53Record.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53Record.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53Record.Route53Record.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53Record.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53Record.Route53Record.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53Record.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53Record.Route53Record.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53Record.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53Record.Route53Record.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53Record.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53Record.Route53Record.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53Record.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53Record.Route53Record.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53Record.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAlias` <a name="putAlias" id="@cdktf/provider-aws.route53Record.Route53Record.putAlias"></a>

```java
public void putAlias(Route53RecordAlias value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53Record.Route53Record.putAlias.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordAlias">Route53RecordAlias</a>

---

##### `putCidrRoutingPolicy` <a name="putCidrRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.putCidrRoutingPolicy"></a>

```java
public void putCidrRoutingPolicy(Route53RecordCidrRoutingPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53Record.Route53Record.putCidrRoutingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicy">Route53RecordCidrRoutingPolicy</a>

---

##### `putFailoverRoutingPolicy` <a name="putFailoverRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.putFailoverRoutingPolicy"></a>

```java
public void putFailoverRoutingPolicy(Route53RecordFailoverRoutingPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53Record.Route53Record.putFailoverRoutingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicy">Route53RecordFailoverRoutingPolicy</a>

---

##### `putGeolocationRoutingPolicy` <a name="putGeolocationRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.putGeolocationRoutingPolicy"></a>

```java
public void putGeolocationRoutingPolicy(Route53RecordGeolocationRoutingPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53Record.Route53Record.putGeolocationRoutingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy">Route53RecordGeolocationRoutingPolicy</a>

---

##### `putLatencyRoutingPolicy` <a name="putLatencyRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.putLatencyRoutingPolicy"></a>

```java
public void putLatencyRoutingPolicy(Route53RecordLatencyRoutingPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53Record.Route53Record.putLatencyRoutingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicy">Route53RecordLatencyRoutingPolicy</a>

---

##### `putWeightedRoutingPolicy` <a name="putWeightedRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.putWeightedRoutingPolicy"></a>

```java
public void putWeightedRoutingPolicy(Route53RecordWeightedRoutingPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53Record.Route53Record.putWeightedRoutingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicy">Route53RecordWeightedRoutingPolicy</a>

---

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-aws.route53Record.Route53Record.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetAllowOverwrite` <a name="resetAllowOverwrite" id="@cdktf/provider-aws.route53Record.Route53Record.resetAllowOverwrite"></a>

```java
public void resetAllowOverwrite()
```

##### `resetCidrRoutingPolicy` <a name="resetCidrRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.resetCidrRoutingPolicy"></a>

```java
public void resetCidrRoutingPolicy()
```

##### `resetFailoverRoutingPolicy` <a name="resetFailoverRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.resetFailoverRoutingPolicy"></a>

```java
public void resetFailoverRoutingPolicy()
```

##### `resetGeolocationRoutingPolicy` <a name="resetGeolocationRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.resetGeolocationRoutingPolicy"></a>

```java
public void resetGeolocationRoutingPolicy()
```

##### `resetHealthCheckId` <a name="resetHealthCheckId" id="@cdktf/provider-aws.route53Record.Route53Record.resetHealthCheckId"></a>

```java
public void resetHealthCheckId()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.route53Record.Route53Record.resetId"></a>

```java
public void resetId()
```

##### `resetLatencyRoutingPolicy` <a name="resetLatencyRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.resetLatencyRoutingPolicy"></a>

```java
public void resetLatencyRoutingPolicy()
```

##### `resetMultivalueAnswerRoutingPolicy` <a name="resetMultivalueAnswerRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.resetMultivalueAnswerRoutingPolicy"></a>

```java
public void resetMultivalueAnswerRoutingPolicy()
```

##### `resetRecords` <a name="resetRecords" id="@cdktf/provider-aws.route53Record.Route53Record.resetRecords"></a>

```java
public void resetRecords()
```

##### `resetSetIdentifier` <a name="resetSetIdentifier" id="@cdktf/provider-aws.route53Record.Route53Record.resetSetIdentifier"></a>

```java
public void resetSetIdentifier()
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-aws.route53Record.Route53Record.resetTtl"></a>

```java
public void resetTtl()
```

##### `resetWeightedRoutingPolicy` <a name="resetWeightedRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.resetWeightedRoutingPolicy"></a>

```java
public void resetWeightedRoutingPolicy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.route53Record.Route53Record.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_record.Route53Record;

Route53Record.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53Record.Route53Record.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.route53Record.Route53Record.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_record.Route53Record;

Route53Record.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53Record.Route53Record.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.route53Record.Route53Record.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_record.Route53Record;

Route53Record.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53Record.Route53Record.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.alias">alias</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference">Route53RecordAliasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.cidrRoutingPolicy">cidrRoutingPolicy</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference">Route53RecordCidrRoutingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.failoverRoutingPolicy">failoverRoutingPolicy</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference">Route53RecordFailoverRoutingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.geolocationRoutingPolicy">geolocationRoutingPolicy</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference">Route53RecordGeolocationRoutingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.latencyRoutingPolicy">latencyRoutingPolicy</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference">Route53RecordLatencyRoutingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.weightedRoutingPolicy">weightedRoutingPolicy</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference">Route53RecordWeightedRoutingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.aliasInput">aliasInput</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAlias">Route53RecordAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.allowOverwriteInput">allowOverwriteInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.cidrRoutingPolicyInput">cidrRoutingPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicy">Route53RecordCidrRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.failoverRoutingPolicyInput">failoverRoutingPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicy">Route53RecordFailoverRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.geolocationRoutingPolicyInput">geolocationRoutingPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy">Route53RecordGeolocationRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.healthCheckIdInput">healthCheckIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.latencyRoutingPolicyInput">latencyRoutingPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicy">Route53RecordLatencyRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.multivalueAnswerRoutingPolicyInput">multivalueAnswerRoutingPolicyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.recordsInput">recordsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.setIdentifierInput">setIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.ttlInput">ttlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.weightedRoutingPolicyInput">weightedRoutingPolicyInput</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicy">Route53RecordWeightedRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.allowOverwrite">allowOverwrite</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.healthCheckId">healthCheckId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.multivalueAnswerRoutingPolicy">multivalueAnswerRoutingPolicy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.records">records</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.setIdentifier">setIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.route53Record.Route53Record.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.route53Record.Route53Record.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53Record.Route53Record.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.route53Record.Route53Record.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.route53Record.Route53Record.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.route53Record.Route53Record.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.route53Record.Route53Record.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53Record.Route53Record.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53Record.Route53Record.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53Record.Route53Record.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53Record.Route53Record.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53Record.Route53Record.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53Record.Route53Record.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53Record.Route53Record.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-aws.route53Record.Route53Record.property.alias"></a>

```java
public Route53RecordAliasOutputReference getAlias();
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference">Route53RecordAliasOutputReference</a>

---

##### `cidrRoutingPolicy`<sup>Required</sup> <a name="cidrRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.property.cidrRoutingPolicy"></a>

```java
public Route53RecordCidrRoutingPolicyOutputReference getCidrRoutingPolicy();
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference">Route53RecordCidrRoutingPolicyOutputReference</a>

---

##### `failoverRoutingPolicy`<sup>Required</sup> <a name="failoverRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.property.failoverRoutingPolicy"></a>

```java
public Route53RecordFailoverRoutingPolicyOutputReference getFailoverRoutingPolicy();
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference">Route53RecordFailoverRoutingPolicyOutputReference</a>

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-aws.route53Record.Route53Record.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

---

##### `geolocationRoutingPolicy`<sup>Required</sup> <a name="geolocationRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.property.geolocationRoutingPolicy"></a>

```java
public Route53RecordGeolocationRoutingPolicyOutputReference getGeolocationRoutingPolicy();
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference">Route53RecordGeolocationRoutingPolicyOutputReference</a>

---

##### `latencyRoutingPolicy`<sup>Required</sup> <a name="latencyRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.property.latencyRoutingPolicy"></a>

```java
public Route53RecordLatencyRoutingPolicyOutputReference getLatencyRoutingPolicy();
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference">Route53RecordLatencyRoutingPolicyOutputReference</a>

---

##### `weightedRoutingPolicy`<sup>Required</sup> <a name="weightedRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.property.weightedRoutingPolicy"></a>

```java
public Route53RecordWeightedRoutingPolicyOutputReference getWeightedRoutingPolicy();
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference">Route53RecordWeightedRoutingPolicyOutputReference</a>

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-aws.route53Record.Route53Record.property.aliasInput"></a>

```java
public Route53RecordAlias getAliasInput();
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordAlias">Route53RecordAlias</a>

---

##### `allowOverwriteInput`<sup>Optional</sup> <a name="allowOverwriteInput" id="@cdktf/provider-aws.route53Record.Route53Record.property.allowOverwriteInput"></a>

```java
public java.lang.Object getAllowOverwriteInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cidrRoutingPolicyInput`<sup>Optional</sup> <a name="cidrRoutingPolicyInput" id="@cdktf/provider-aws.route53Record.Route53Record.property.cidrRoutingPolicyInput"></a>

```java
public Route53RecordCidrRoutingPolicy getCidrRoutingPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicy">Route53RecordCidrRoutingPolicy</a>

---

##### `failoverRoutingPolicyInput`<sup>Optional</sup> <a name="failoverRoutingPolicyInput" id="@cdktf/provider-aws.route53Record.Route53Record.property.failoverRoutingPolicyInput"></a>

```java
public Route53RecordFailoverRoutingPolicy getFailoverRoutingPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicy">Route53RecordFailoverRoutingPolicy</a>

---

##### `geolocationRoutingPolicyInput`<sup>Optional</sup> <a name="geolocationRoutingPolicyInput" id="@cdktf/provider-aws.route53Record.Route53Record.property.geolocationRoutingPolicyInput"></a>

```java
public Route53RecordGeolocationRoutingPolicy getGeolocationRoutingPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy">Route53RecordGeolocationRoutingPolicy</a>

---

##### `healthCheckIdInput`<sup>Optional</sup> <a name="healthCheckIdInput" id="@cdktf/provider-aws.route53Record.Route53Record.property.healthCheckIdInput"></a>

```java
public java.lang.String getHealthCheckIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.route53Record.Route53Record.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `latencyRoutingPolicyInput`<sup>Optional</sup> <a name="latencyRoutingPolicyInput" id="@cdktf/provider-aws.route53Record.Route53Record.property.latencyRoutingPolicyInput"></a>

```java
public Route53RecordLatencyRoutingPolicy getLatencyRoutingPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicy">Route53RecordLatencyRoutingPolicy</a>

---

##### `multivalueAnswerRoutingPolicyInput`<sup>Optional</sup> <a name="multivalueAnswerRoutingPolicyInput" id="@cdktf/provider-aws.route53Record.Route53Record.property.multivalueAnswerRoutingPolicyInput"></a>

```java
public java.lang.Object getMultivalueAnswerRoutingPolicyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.route53Record.Route53Record.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `recordsInput`<sup>Optional</sup> <a name="recordsInput" id="@cdktf/provider-aws.route53Record.Route53Record.property.recordsInput"></a>

```java
public java.util.List<java.lang.String> getRecordsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `setIdentifierInput`<sup>Optional</sup> <a name="setIdentifierInput" id="@cdktf/provider-aws.route53Record.Route53Record.property.setIdentifierInput"></a>

```java
public java.lang.String getSetIdentifierInput();
```

- *Type:* java.lang.String

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-aws.route53Record.Route53Record.property.ttlInput"></a>

```java
public java.lang.Number getTtlInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.route53Record.Route53Record.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `weightedRoutingPolicyInput`<sup>Optional</sup> <a name="weightedRoutingPolicyInput" id="@cdktf/provider-aws.route53Record.Route53Record.property.weightedRoutingPolicyInput"></a>

```java
public Route53RecordWeightedRoutingPolicy getWeightedRoutingPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicy">Route53RecordWeightedRoutingPolicy</a>

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-aws.route53Record.Route53Record.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `allowOverwrite`<sup>Required</sup> <a name="allowOverwrite" id="@cdktf/provider-aws.route53Record.Route53Record.property.allowOverwrite"></a>

```java
public java.lang.Object getAllowOverwrite();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `healthCheckId`<sup>Required</sup> <a name="healthCheckId" id="@cdktf/provider-aws.route53Record.Route53Record.property.healthCheckId"></a>

```java
public java.lang.String getHealthCheckId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53Record.Route53Record.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `multivalueAnswerRoutingPolicy`<sup>Required</sup> <a name="multivalueAnswerRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53Record.property.multivalueAnswerRoutingPolicy"></a>

```java
public java.lang.Object getMultivalueAnswerRoutingPolicy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53Record.Route53Record.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `records`<sup>Required</sup> <a name="records" id="@cdktf/provider-aws.route53Record.Route53Record.property.records"></a>

```java
public java.util.List<java.lang.String> getRecords();
```

- *Type:* java.util.List<java.lang.String>

---

##### `setIdentifier`<sup>Required</sup> <a name="setIdentifier" id="@cdktf/provider-aws.route53Record.Route53Record.property.setIdentifier"></a>

```java
public java.lang.String getSetIdentifier();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-aws.route53Record.Route53Record.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.route53Record.Route53Record.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-aws.route53Record.Route53Record.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.route53Record.Route53Record.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Route53RecordAlias <a name="Route53RecordAlias" id="@cdktf/provider-aws.route53Record.Route53RecordAlias"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53Record.Route53RecordAlias.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_record.Route53RecordAlias;

Route53RecordAlias.builder()
    .evaluateTargetHealth(java.lang.Boolean)
    .evaluateTargetHealth(IResolvable)
    .name(java.lang.String)
    .zoneId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAlias.property.evaluateTargetHealth">evaluateTargetHealth</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#evaluate_target_health Route53Record#evaluate_target_health}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAlias.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#name Route53Record#name}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAlias.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#zone_id Route53Record#zone_id}. |

---

##### `evaluateTargetHealth`<sup>Required</sup> <a name="evaluateTargetHealth" id="@cdktf/provider-aws.route53Record.Route53RecordAlias.property.evaluateTargetHealth"></a>

```java
public java.lang.Object getEvaluateTargetHealth();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#evaluate_target_health Route53Record#evaluate_target_health}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53Record.Route53RecordAlias.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#name Route53Record#name}.

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-aws.route53Record.Route53RecordAlias.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#zone_id Route53Record#zone_id}.

---

### Route53RecordCidrRoutingPolicy <a name="Route53RecordCidrRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_record.Route53RecordCidrRoutingPolicy;

Route53RecordCidrRoutingPolicy.builder()
    .collectionId(java.lang.String)
    .locationName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicy.property.collectionId">collectionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#collection_id Route53Record#collection_id}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicy.property.locationName">locationName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#location_name Route53Record#location_name}. |

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicy.property.collectionId"></a>

```java
public java.lang.String getCollectionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#collection_id Route53Record#collection_id}.

---

##### `locationName`<sup>Required</sup> <a name="locationName" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicy.property.locationName"></a>

```java
public java.lang.String getLocationName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#location_name Route53Record#location_name}.

---

### Route53RecordConfig <a name="Route53RecordConfig" id="@cdktf/provider-aws.route53Record.Route53RecordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_record.Route53RecordConfig;

Route53RecordConfig.builder()
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
    .name(java.lang.String)
    .type(java.lang.String)
    .zoneId(java.lang.String)
//  .alias(Route53RecordAlias)
//  .allowOverwrite(java.lang.Boolean)
//  .allowOverwrite(IResolvable)
//  .cidrRoutingPolicy(Route53RecordCidrRoutingPolicy)
//  .failoverRoutingPolicy(Route53RecordFailoverRoutingPolicy)
//  .geolocationRoutingPolicy(Route53RecordGeolocationRoutingPolicy)
//  .healthCheckId(java.lang.String)
//  .id(java.lang.String)
//  .latencyRoutingPolicy(Route53RecordLatencyRoutingPolicy)
//  .multivalueAnswerRoutingPolicy(java.lang.Boolean)
//  .multivalueAnswerRoutingPolicy(IResolvable)
//  .records(java.util.List<java.lang.String>)
//  .setIdentifier(java.lang.String)
//  .ttl(java.lang.Number)
//  .weightedRoutingPolicy(Route53RecordWeightedRoutingPolicy)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#name Route53Record#name}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#type Route53Record#type}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#zone_id Route53Record#zone_id}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.alias">alias</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAlias">Route53RecordAlias</a></code> | alias block. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.allowOverwrite">allowOverwrite</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#allow_overwrite Route53Record#allow_overwrite}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.cidrRoutingPolicy">cidrRoutingPolicy</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicy">Route53RecordCidrRoutingPolicy</a></code> | cidr_routing_policy block. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.failoverRoutingPolicy">failoverRoutingPolicy</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicy">Route53RecordFailoverRoutingPolicy</a></code> | failover_routing_policy block. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.geolocationRoutingPolicy">geolocationRoutingPolicy</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy">Route53RecordGeolocationRoutingPolicy</a></code> | geolocation_routing_policy block. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.healthCheckId">healthCheckId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#health_check_id Route53Record#health_check_id}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#id Route53Record#id}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.latencyRoutingPolicy">latencyRoutingPolicy</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicy">Route53RecordLatencyRoutingPolicy</a></code> | latency_routing_policy block. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.multivalueAnswerRoutingPolicy">multivalueAnswerRoutingPolicy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#multivalue_answer_routing_policy Route53Record#multivalue_answer_routing_policy}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.records">records</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#records Route53Record#records}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.setIdentifier">setIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#set_identifier Route53Record#set_identifier}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#ttl Route53Record#ttl}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.weightedRoutingPolicy">weightedRoutingPolicy</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicy">Route53RecordWeightedRoutingPolicy</a></code> | weighted_routing_policy block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#name Route53Record#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#type Route53Record#type}.

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#zone_id Route53Record#zone_id}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.alias"></a>

```java
public Route53RecordAlias getAlias();
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordAlias">Route53RecordAlias</a>

alias block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#alias Route53Record#alias}

---

##### `allowOverwrite`<sup>Optional</sup> <a name="allowOverwrite" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.allowOverwrite"></a>

```java
public java.lang.Object getAllowOverwrite();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#allow_overwrite Route53Record#allow_overwrite}.

---

##### `cidrRoutingPolicy`<sup>Optional</sup> <a name="cidrRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.cidrRoutingPolicy"></a>

```java
public Route53RecordCidrRoutingPolicy getCidrRoutingPolicy();
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicy">Route53RecordCidrRoutingPolicy</a>

cidr_routing_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#cidr_routing_policy Route53Record#cidr_routing_policy}

---

##### `failoverRoutingPolicy`<sup>Optional</sup> <a name="failoverRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.failoverRoutingPolicy"></a>

```java
public Route53RecordFailoverRoutingPolicy getFailoverRoutingPolicy();
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicy">Route53RecordFailoverRoutingPolicy</a>

failover_routing_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#failover_routing_policy Route53Record#failover_routing_policy}

---

##### `geolocationRoutingPolicy`<sup>Optional</sup> <a name="geolocationRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.geolocationRoutingPolicy"></a>

```java
public Route53RecordGeolocationRoutingPolicy getGeolocationRoutingPolicy();
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy">Route53RecordGeolocationRoutingPolicy</a>

geolocation_routing_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#geolocation_routing_policy Route53Record#geolocation_routing_policy}

---

##### `healthCheckId`<sup>Optional</sup> <a name="healthCheckId" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.healthCheckId"></a>

```java
public java.lang.String getHealthCheckId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#health_check_id Route53Record#health_check_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#id Route53Record#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `latencyRoutingPolicy`<sup>Optional</sup> <a name="latencyRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.latencyRoutingPolicy"></a>

```java
public Route53RecordLatencyRoutingPolicy getLatencyRoutingPolicy();
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicy">Route53RecordLatencyRoutingPolicy</a>

latency_routing_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#latency_routing_policy Route53Record#latency_routing_policy}

---

##### `multivalueAnswerRoutingPolicy`<sup>Optional</sup> <a name="multivalueAnswerRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.multivalueAnswerRoutingPolicy"></a>

```java
public java.lang.Object getMultivalueAnswerRoutingPolicy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#multivalue_answer_routing_policy Route53Record#multivalue_answer_routing_policy}.

---

##### `records`<sup>Optional</sup> <a name="records" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.records"></a>

```java
public java.util.List<java.lang.String> getRecords();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#records Route53Record#records}.

---

##### `setIdentifier`<sup>Optional</sup> <a name="setIdentifier" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.setIdentifier"></a>

```java
public java.lang.String getSetIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#set_identifier Route53Record#set_identifier}.

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#ttl Route53Record#ttl}.

---

##### `weightedRoutingPolicy`<sup>Optional</sup> <a name="weightedRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.weightedRoutingPolicy"></a>

```java
public Route53RecordWeightedRoutingPolicy getWeightedRoutingPolicy();
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicy">Route53RecordWeightedRoutingPolicy</a>

weighted_routing_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#weighted_routing_policy Route53Record#weighted_routing_policy}

---

### Route53RecordFailoverRoutingPolicy <a name="Route53RecordFailoverRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_record.Route53RecordFailoverRoutingPolicy;

Route53RecordFailoverRoutingPolicy.builder()
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicy.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#type Route53Record#type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicy.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#type Route53Record#type}.

---

### Route53RecordGeolocationRoutingPolicy <a name="Route53RecordGeolocationRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_record.Route53RecordGeolocationRoutingPolicy;

Route53RecordGeolocationRoutingPolicy.builder()
//  .continent(java.lang.String)
//  .country(java.lang.String)
//  .subdivision(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy.property.continent">continent</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#continent Route53Record#continent}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy.property.country">country</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#country Route53Record#country}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy.property.subdivision">subdivision</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#subdivision Route53Record#subdivision}. |

---

##### `continent`<sup>Optional</sup> <a name="continent" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy.property.continent"></a>

```java
public java.lang.String getContinent();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#continent Route53Record#continent}.

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy.property.country"></a>

```java
public java.lang.String getCountry();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#country Route53Record#country}.

---

##### `subdivision`<sup>Optional</sup> <a name="subdivision" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy.property.subdivision"></a>

```java
public java.lang.String getSubdivision();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#subdivision Route53Record#subdivision}.

---

### Route53RecordLatencyRoutingPolicy <a name="Route53RecordLatencyRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_record.Route53RecordLatencyRoutingPolicy;

Route53RecordLatencyRoutingPolicy.builder()
    .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicy.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#region Route53Record#region}. |

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicy.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#region Route53Record#region}.

---

### Route53RecordWeightedRoutingPolicy <a name="Route53RecordWeightedRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_record.Route53RecordWeightedRoutingPolicy;

Route53RecordWeightedRoutingPolicy.builder()
    .weight(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicy.property.weight">weight</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#weight Route53Record#weight}. |

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicy.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#weight Route53Record#weight}.

---

## Classes <a name="Classes" id="Classes"></a>

### Route53RecordAliasOutputReference <a name="Route53RecordAliasOutputReference" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_record.Route53RecordAliasOutputReference;

new Route53RecordAliasOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.evaluateTargetHealthInput">evaluateTargetHealthInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.evaluateTargetHealth">evaluateTargetHealth</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAlias">Route53RecordAlias</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `evaluateTargetHealthInput`<sup>Optional</sup> <a name="evaluateTargetHealthInput" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.evaluateTargetHealthInput"></a>

```java
public java.lang.Object getEvaluateTargetHealthInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `evaluateTargetHealth`<sup>Required</sup> <a name="evaluateTargetHealth" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.evaluateTargetHealth"></a>

```java
public java.lang.Object getEvaluateTargetHealth();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.internalValue"></a>

```java
public Route53RecordAlias getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordAlias">Route53RecordAlias</a>

---


### Route53RecordCidrRoutingPolicyOutputReference <a name="Route53RecordCidrRoutingPolicyOutputReference" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_record.Route53RecordCidrRoutingPolicyOutputReference;

new Route53RecordCidrRoutingPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.property.collectionIdInput">collectionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.property.locationNameInput">locationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.property.collectionId">collectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.property.locationName">locationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicy">Route53RecordCidrRoutingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `collectionIdInput`<sup>Optional</sup> <a name="collectionIdInput" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.property.collectionIdInput"></a>

```java
public java.lang.String getCollectionIdInput();
```

- *Type:* java.lang.String

---

##### `locationNameInput`<sup>Optional</sup> <a name="locationNameInput" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.property.locationNameInput"></a>

```java
public java.lang.String getLocationNameInput();
```

- *Type:* java.lang.String

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.property.collectionId"></a>

```java
public java.lang.String getCollectionId();
```

- *Type:* java.lang.String

---

##### `locationName`<sup>Required</sup> <a name="locationName" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.property.locationName"></a>

```java
public java.lang.String getLocationName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.property.internalValue"></a>

```java
public Route53RecordCidrRoutingPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicy">Route53RecordCidrRoutingPolicy</a>

---


### Route53RecordFailoverRoutingPolicyOutputReference <a name="Route53RecordFailoverRoutingPolicyOutputReference" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_record.Route53RecordFailoverRoutingPolicyOutputReference;

new Route53RecordFailoverRoutingPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicy">Route53RecordFailoverRoutingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.property.internalValue"></a>

```java
public Route53RecordFailoverRoutingPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicy">Route53RecordFailoverRoutingPolicy</a>

---


### Route53RecordGeolocationRoutingPolicyOutputReference <a name="Route53RecordGeolocationRoutingPolicyOutputReference" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_record.Route53RecordGeolocationRoutingPolicyOutputReference;

new Route53RecordGeolocationRoutingPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.resetContinent">resetContinent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.resetCountry">resetCountry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.resetSubdivision">resetSubdivision</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContinent` <a name="resetContinent" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.resetContinent"></a>

```java
public void resetContinent()
```

##### `resetCountry` <a name="resetCountry" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.resetCountry"></a>

```java
public void resetCountry()
```

##### `resetSubdivision` <a name="resetSubdivision" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.resetSubdivision"></a>

```java
public void resetSubdivision()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.continentInput">continentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.countryInput">countryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.subdivisionInput">subdivisionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.continent">continent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.country">country</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.subdivision">subdivision</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy">Route53RecordGeolocationRoutingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `continentInput`<sup>Optional</sup> <a name="continentInput" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.continentInput"></a>

```java
public java.lang.String getContinentInput();
```

- *Type:* java.lang.String

---

##### `countryInput`<sup>Optional</sup> <a name="countryInput" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.countryInput"></a>

```java
public java.lang.String getCountryInput();
```

- *Type:* java.lang.String

---

##### `subdivisionInput`<sup>Optional</sup> <a name="subdivisionInput" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.subdivisionInput"></a>

```java
public java.lang.String getSubdivisionInput();
```

- *Type:* java.lang.String

---

##### `continent`<sup>Required</sup> <a name="continent" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.continent"></a>

```java
public java.lang.String getContinent();
```

- *Type:* java.lang.String

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.country"></a>

```java
public java.lang.String getCountry();
```

- *Type:* java.lang.String

---

##### `subdivision`<sup>Required</sup> <a name="subdivision" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.subdivision"></a>

```java
public java.lang.String getSubdivision();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.internalValue"></a>

```java
public Route53RecordGeolocationRoutingPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy">Route53RecordGeolocationRoutingPolicy</a>

---


### Route53RecordLatencyRoutingPolicyOutputReference <a name="Route53RecordLatencyRoutingPolicyOutputReference" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_record.Route53RecordLatencyRoutingPolicyOutputReference;

new Route53RecordLatencyRoutingPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicy">Route53RecordLatencyRoutingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.property.internalValue"></a>

```java
public Route53RecordLatencyRoutingPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicy">Route53RecordLatencyRoutingPolicy</a>

---


### Route53RecordWeightedRoutingPolicyOutputReference <a name="Route53RecordWeightedRoutingPolicyOutputReference" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.route53_record.Route53RecordWeightedRoutingPolicyOutputReference;

new Route53RecordWeightedRoutingPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.property.weightInput">weightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicy">Route53RecordWeightedRoutingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.property.weightInput"></a>

```java
public java.lang.Number getWeightInput();
```

- *Type:* java.lang.Number

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.property.internalValue"></a>

```java
public Route53RecordWeightedRoutingPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicy">Route53RecordWeightedRoutingPolicy</a>

---



