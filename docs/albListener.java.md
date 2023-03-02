# `albListener` Submodule <a name="`albListener` Submodule" id="@cdktf/provider-aws.albListener"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlbListener <a name="AlbListener" id="@cdktf/provider-aws.albListener.AlbListener"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/alb_listener aws_alb_listener}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albListener.AlbListener.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.alb_listener.AlbListener;

AlbListener.Builder.create(Construct scope, java.lang.String id)
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
    .defaultAction(IResolvable)
    .defaultAction(java.util.List<AlbListenerDefaultAction>)
    .loadBalancerArn(java.lang.String)
//  .alpnPolicy(java.lang.String)
//  .certificateArn(java.lang.String)
//  .id(java.lang.String)
//  .port(java.lang.Number)
//  .protocol(java.lang.String)
//  .sslPolicy(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(AlbListenerTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.defaultAction">defaultAction</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultAction">AlbListenerDefaultAction</a>></code> | default_action block. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.loadBalancerArn">loadBalancerArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#load_balancer_arn AlbListener#load_balancer_arn}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.alpnPolicy">alpnPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#alpn_policy AlbListener#alpn_policy}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#certificate_arn AlbListener#certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#id AlbListener#id}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#port AlbListener#port}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#protocol AlbListener#protocol}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.sslPolicy">sslPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#ssl_policy AlbListener#ssl_policy}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#tags AlbListener#tags}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#tags_all AlbListener#tags_all}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeouts">AlbListenerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.defaultAction"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultAction">AlbListenerDefaultAction</a>>

default_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#default_action AlbListener#default_action}

---

##### `loadBalancerArn`<sup>Required</sup> <a name="loadBalancerArn" id="@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.loadBalancerArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#load_balancer_arn AlbListener#load_balancer_arn}.

---

##### `alpnPolicy`<sup>Optional</sup> <a name="alpnPolicy" id="@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.alpnPolicy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#alpn_policy AlbListener#alpn_policy}.

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.certificateArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#certificate_arn AlbListener#certificate_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#id AlbListener#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.port"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#port AlbListener#port}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.protocol"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#protocol AlbListener#protocol}.

---

##### `sslPolicy`<sup>Optional</sup> <a name="sslPolicy" id="@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.sslPolicy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#ssl_policy AlbListener#ssl_policy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#tags AlbListener#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#tags_all AlbListener#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.albListener.AlbListener.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerTimeouts">AlbListenerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#timeouts AlbListener#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.putDefaultAction">putDefaultAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.resetAlpnPolicy">resetAlpnPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.resetCertificateArn">resetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.resetSslPolicy">resetSslPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.albListener.AlbListener.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.albListener.AlbListener.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.albListener.AlbListener.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.albListener.AlbListener.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.albListener.AlbListener.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.albListener.AlbListener.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.albListener.AlbListener.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.albListener.AlbListener.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.albListener.AlbListener.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.albListener.AlbListener.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListener.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.albListener.AlbListener.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListener.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.albListener.AlbListener.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListener.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.albListener.AlbListener.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListener.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.albListener.AlbListener.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListener.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.albListener.AlbListener.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListener.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.albListener.AlbListener.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListener.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.albListener.AlbListener.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListener.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.albListener.AlbListener.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListener.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.albListener.AlbListener.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListener.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putDefaultAction` <a name="putDefaultAction" id="@cdktf/provider-aws.albListener.AlbListener.putDefaultAction"></a>

```java
public void putDefaultAction(IResolvable OR java.util.List<AlbListenerDefaultAction> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.albListener.AlbListener.putDefaultAction.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultAction">AlbListenerDefaultAction</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.albListener.AlbListener.putTimeouts"></a>

```java
public void putTimeouts(AlbListenerTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.albListener.AlbListener.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerTimeouts">AlbListenerTimeouts</a>

---

##### `resetAlpnPolicy` <a name="resetAlpnPolicy" id="@cdktf/provider-aws.albListener.AlbListener.resetAlpnPolicy"></a>

```java
public void resetAlpnPolicy()
```

##### `resetCertificateArn` <a name="resetCertificateArn" id="@cdktf/provider-aws.albListener.AlbListener.resetCertificateArn"></a>

```java
public void resetCertificateArn()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.albListener.AlbListener.resetId"></a>

```java
public void resetId()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-aws.albListener.AlbListener.resetPort"></a>

```java
public void resetPort()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-aws.albListener.AlbListener.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetSslPolicy` <a name="resetSslPolicy" id="@cdktf/provider-aws.albListener.AlbListener.resetSslPolicy"></a>

```java
public void resetSslPolicy()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.albListener.AlbListener.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.albListener.AlbListener.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.albListener.AlbListener.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.albListener.AlbListener.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.alb_listener.AlbListener;

AlbListener.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.albListener.AlbListener.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.albListener.AlbListener.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.alb_listener.AlbListener;

AlbListener.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.albListener.AlbListener.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.albListener.AlbListener.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.alb_listener.AlbListener;

AlbListener.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.albListener.AlbListener.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.defaultAction">defaultAction</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionList">AlbListenerDefaultActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference">AlbListenerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.alpnPolicyInput">alpnPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.certificateArnInput">certificateArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.defaultActionInput">defaultActionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultAction">AlbListenerDefaultAction</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.loadBalancerArnInput">loadBalancerArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.sslPolicyInput">sslPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeouts">AlbListenerTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.alpnPolicy">alpnPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.loadBalancerArn">loadBalancerArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.sslPolicy">sslPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.albListener.AlbListener.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.albListener.AlbListener.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.albListener.AlbListener.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.albListener.AlbListener.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.albListener.AlbListener.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.albListener.AlbListener.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.albListener.AlbListener.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.albListener.AlbListener.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.albListener.AlbListener.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.albListener.AlbListener.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.albListener.AlbListener.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.albListener.AlbListener.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.albListener.AlbListener.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.albListener.AlbListener.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.albListener.AlbListener.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="@cdktf/provider-aws.albListener.AlbListener.property.defaultAction"></a>

```java
public AlbListenerDefaultActionList getDefaultAction();
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionList">AlbListenerDefaultActionList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.albListener.AlbListener.property.timeouts"></a>

```java
public AlbListenerTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference">AlbListenerTimeoutsOutputReference</a>

---

##### `alpnPolicyInput`<sup>Optional</sup> <a name="alpnPolicyInput" id="@cdktf/provider-aws.albListener.AlbListener.property.alpnPolicyInput"></a>

```java
public java.lang.String getAlpnPolicyInput();
```

- *Type:* java.lang.String

---

##### `certificateArnInput`<sup>Optional</sup> <a name="certificateArnInput" id="@cdktf/provider-aws.albListener.AlbListener.property.certificateArnInput"></a>

```java
public java.lang.String getCertificateArnInput();
```

- *Type:* java.lang.String

---

##### `defaultActionInput`<sup>Optional</sup> <a name="defaultActionInput" id="@cdktf/provider-aws.albListener.AlbListener.property.defaultActionInput"></a>

```java
public java.lang.Object getDefaultActionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultAction">AlbListenerDefaultAction</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.albListener.AlbListener.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `loadBalancerArnInput`<sup>Optional</sup> <a name="loadBalancerArnInput" id="@cdktf/provider-aws.albListener.AlbListener.property.loadBalancerArnInput"></a>

```java
public java.lang.String getLoadBalancerArnInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.albListener.AlbListener.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-aws.albListener.AlbListener.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `sslPolicyInput`<sup>Optional</sup> <a name="sslPolicyInput" id="@cdktf/provider-aws.albListener.AlbListener.property.sslPolicyInput"></a>

```java
public java.lang.String getSslPolicyInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.albListener.AlbListener.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.albListener.AlbListener.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.albListener.AlbListener.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerTimeouts">AlbListenerTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `alpnPolicy`<sup>Required</sup> <a name="alpnPolicy" id="@cdktf/provider-aws.albListener.AlbListener.property.alpnPolicy"></a>

```java
public java.lang.String getAlpnPolicy();
```

- *Type:* java.lang.String

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktf/provider-aws.albListener.AlbListener.property.certificateArn"></a>

```java
public java.lang.String getCertificateArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.albListener.AlbListener.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `loadBalancerArn`<sup>Required</sup> <a name="loadBalancerArn" id="@cdktf/provider-aws.albListener.AlbListener.property.loadBalancerArn"></a>

```java
public java.lang.String getLoadBalancerArn();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.albListener.AlbListener.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.albListener.AlbListener.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `sslPolicy`<sup>Required</sup> <a name="sslPolicy" id="@cdktf/provider-aws.albListener.AlbListener.property.sslPolicy"></a>

```java
public java.lang.String getSslPolicy();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.albListener.AlbListener.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.albListener.AlbListener.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListener.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.albListener.AlbListener.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AlbListenerConfig <a name="AlbListenerConfig" id="@cdktf/provider-aws.albListener.AlbListenerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albListener.AlbListenerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.alb_listener.AlbListenerConfig;

AlbListenerConfig.builder()
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
    .defaultAction(IResolvable)
    .defaultAction(java.util.List<AlbListenerDefaultAction>)
    .loadBalancerArn(java.lang.String)
//  .alpnPolicy(java.lang.String)
//  .certificateArn(java.lang.String)
//  .id(java.lang.String)
//  .port(java.lang.Number)
//  .protocol(java.lang.String)
//  .sslPolicy(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(AlbListenerTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.defaultAction">defaultAction</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultAction">AlbListenerDefaultAction</a>></code> | default_action block. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.loadBalancerArn">loadBalancerArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#load_balancer_arn AlbListener#load_balancer_arn}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.alpnPolicy">alpnPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#alpn_policy AlbListener#alpn_policy}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#certificate_arn AlbListener#certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#id AlbListener#id}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#port AlbListener#port}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#protocol AlbListener#protocol}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.sslPolicy">sslPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#ssl_policy AlbListener#ssl_policy}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#tags AlbListener#tags}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#tags_all AlbListener#tags_all}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeouts">AlbListenerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.defaultAction"></a>

```java
public java.lang.Object getDefaultAction();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultAction">AlbListenerDefaultAction</a>>

default_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#default_action AlbListener#default_action}

---

##### `loadBalancerArn`<sup>Required</sup> <a name="loadBalancerArn" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.loadBalancerArn"></a>

```java
public java.lang.String getLoadBalancerArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#load_balancer_arn AlbListener#load_balancer_arn}.

---

##### `alpnPolicy`<sup>Optional</sup> <a name="alpnPolicy" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.alpnPolicy"></a>

```java
public java.lang.String getAlpnPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#alpn_policy AlbListener#alpn_policy}.

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.certificateArn"></a>

```java
public java.lang.String getCertificateArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#certificate_arn AlbListener#certificate_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#id AlbListener#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#port AlbListener#port}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#protocol AlbListener#protocol}.

---

##### `sslPolicy`<sup>Optional</sup> <a name="sslPolicy" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.sslPolicy"></a>

```java
public java.lang.String getSslPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#ssl_policy AlbListener#ssl_policy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#tags AlbListener#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#tags_all AlbListener#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.albListener.AlbListenerConfig.property.timeouts"></a>

```java
public AlbListenerTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerTimeouts">AlbListenerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#timeouts AlbListener#timeouts}

---

### AlbListenerDefaultAction <a name="AlbListenerDefaultAction" id="@cdktf/provider-aws.albListener.AlbListenerDefaultAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albListener.AlbListenerDefaultAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.alb_listener.AlbListenerDefaultAction;

AlbListenerDefaultAction.builder()
    .type(java.lang.String)
//  .authenticateCognito(AlbListenerDefaultActionAuthenticateCognito)
//  .authenticateOidc(AlbListenerDefaultActionAuthenticateOidc)
//  .fixedResponse(AlbListenerDefaultActionFixedResponse)
//  .forward(AlbListenerDefaultActionForward)
//  .order(java.lang.Number)
//  .redirect(AlbListenerDefaultActionRedirect)
//  .targetGroupArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultAction.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#type AlbListener#type}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultAction.property.authenticateCognito">authenticateCognito</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito">AlbListenerDefaultActionAuthenticateCognito</a></code> | authenticate_cognito block. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultAction.property.authenticateOidc">authenticateOidc</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc">AlbListenerDefaultActionAuthenticateOidc</a></code> | authenticate_oidc block. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultAction.property.fixedResponse">fixedResponse</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponse">AlbListenerDefaultActionFixedResponse</a></code> | fixed_response block. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultAction.property.forward">forward</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForward">AlbListenerDefaultActionForward</a></code> | forward block. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultAction.property.order">order</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#order AlbListener#order}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultAction.property.redirect">redirect</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect">AlbListenerDefaultActionRedirect</a></code> | redirect block. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultAction.property.targetGroupArn">targetGroupArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#target_group_arn AlbListener#target_group_arn}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.albListener.AlbListenerDefaultAction.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#type AlbListener#type}.

---

##### `authenticateCognito`<sup>Optional</sup> <a name="authenticateCognito" id="@cdktf/provider-aws.albListener.AlbListenerDefaultAction.property.authenticateCognito"></a>

```java
public AlbListenerDefaultActionAuthenticateCognito getAuthenticateCognito();
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito">AlbListenerDefaultActionAuthenticateCognito</a>

authenticate_cognito block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#authenticate_cognito AlbListener#authenticate_cognito}

---

##### `authenticateOidc`<sup>Optional</sup> <a name="authenticateOidc" id="@cdktf/provider-aws.albListener.AlbListenerDefaultAction.property.authenticateOidc"></a>

```java
public AlbListenerDefaultActionAuthenticateOidc getAuthenticateOidc();
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc">AlbListenerDefaultActionAuthenticateOidc</a>

authenticate_oidc block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#authenticate_oidc AlbListener#authenticate_oidc}

---

##### `fixedResponse`<sup>Optional</sup> <a name="fixedResponse" id="@cdktf/provider-aws.albListener.AlbListenerDefaultAction.property.fixedResponse"></a>

```java
public AlbListenerDefaultActionFixedResponse getFixedResponse();
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponse">AlbListenerDefaultActionFixedResponse</a>

fixed_response block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#fixed_response AlbListener#fixed_response}

---

##### `forward`<sup>Optional</sup> <a name="forward" id="@cdktf/provider-aws.albListener.AlbListenerDefaultAction.property.forward"></a>

```java
public AlbListenerDefaultActionForward getForward();
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForward">AlbListenerDefaultActionForward</a>

forward block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#forward AlbListener#forward}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-aws.albListener.AlbListenerDefaultAction.property.order"></a>

```java
public java.lang.Number getOrder();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#order AlbListener#order}.

---

##### `redirect`<sup>Optional</sup> <a name="redirect" id="@cdktf/provider-aws.albListener.AlbListenerDefaultAction.property.redirect"></a>

```java
public AlbListenerDefaultActionRedirect getRedirect();
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect">AlbListenerDefaultActionRedirect</a>

redirect block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#redirect AlbListener#redirect}

---

##### `targetGroupArn`<sup>Optional</sup> <a name="targetGroupArn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultAction.property.targetGroupArn"></a>

```java
public java.lang.String getTargetGroupArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#target_group_arn AlbListener#target_group_arn}.

---

### AlbListenerDefaultActionAuthenticateCognito <a name="AlbListenerDefaultActionAuthenticateCognito" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.alb_listener.AlbListenerDefaultActionAuthenticateCognito;

AlbListenerDefaultActionAuthenticateCognito.builder()
    .userPoolArn(java.lang.String)
    .userPoolClientId(java.lang.String)
    .userPoolDomain(java.lang.String)
//  .authenticationRequestExtraParams(java.util.Map<java.lang.String, java.lang.String>)
//  .onUnauthenticatedRequest(java.lang.String)
//  .scope(java.lang.String)
//  .sessionCookieName(java.lang.String)
//  .sessionTimeout(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito.property.userPoolArn">userPoolArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#user_pool_arn AlbListener#user_pool_arn}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito.property.userPoolClientId">userPoolClientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#user_pool_client_id AlbListener#user_pool_client_id}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito.property.userPoolDomain">userPoolDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#user_pool_domain AlbListener#user_pool_domain}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito.property.authenticationRequestExtraParams">authenticationRequestExtraParams</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#authentication_request_extra_params AlbListener#authentication_request_extra_params}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito.property.onUnauthenticatedRequest">onUnauthenticatedRequest</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#on_unauthenticated_request AlbListener#on_unauthenticated_request}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito.property.scope">scope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#scope AlbListener#scope}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito.property.sessionCookieName">sessionCookieName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#session_cookie_name AlbListener#session_cookie_name}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito.property.sessionTimeout">sessionTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#session_timeout AlbListener#session_timeout}. |

---

##### `userPoolArn`<sup>Required</sup> <a name="userPoolArn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito.property.userPoolArn"></a>

```java
public java.lang.String getUserPoolArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#user_pool_arn AlbListener#user_pool_arn}.

---

##### `userPoolClientId`<sup>Required</sup> <a name="userPoolClientId" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito.property.userPoolClientId"></a>

```java
public java.lang.String getUserPoolClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#user_pool_client_id AlbListener#user_pool_client_id}.

---

##### `userPoolDomain`<sup>Required</sup> <a name="userPoolDomain" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito.property.userPoolDomain"></a>

```java
public java.lang.String getUserPoolDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#user_pool_domain AlbListener#user_pool_domain}.

---

##### `authenticationRequestExtraParams`<sup>Optional</sup> <a name="authenticationRequestExtraParams" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito.property.authenticationRequestExtraParams"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAuthenticationRequestExtraParams();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#authentication_request_extra_params AlbListener#authentication_request_extra_params}.

---

##### `onUnauthenticatedRequest`<sup>Optional</sup> <a name="onUnauthenticatedRequest" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito.property.onUnauthenticatedRequest"></a>

```java
public java.lang.String getOnUnauthenticatedRequest();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#on_unauthenticated_request AlbListener#on_unauthenticated_request}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#scope AlbListener#scope}.

---

##### `sessionCookieName`<sup>Optional</sup> <a name="sessionCookieName" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito.property.sessionCookieName"></a>

```java
public java.lang.String getSessionCookieName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#session_cookie_name AlbListener#session_cookie_name}.

---

##### `sessionTimeout`<sup>Optional</sup> <a name="sessionTimeout" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito.property.sessionTimeout"></a>

```java
public java.lang.Number getSessionTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#session_timeout AlbListener#session_timeout}.

---

### AlbListenerDefaultActionAuthenticateOidc <a name="AlbListenerDefaultActionAuthenticateOidc" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.alb_listener.AlbListenerDefaultActionAuthenticateOidc;

AlbListenerDefaultActionAuthenticateOidc.builder()
    .authorizationEndpoint(java.lang.String)
    .clientId(java.lang.String)
    .clientSecret(java.lang.String)
    .issuer(java.lang.String)
    .tokenEndpoint(java.lang.String)
    .userInfoEndpoint(java.lang.String)
//  .authenticationRequestExtraParams(java.util.Map<java.lang.String, java.lang.String>)
//  .onUnauthenticatedRequest(java.lang.String)
//  .scope(java.lang.String)
//  .sessionCookieName(java.lang.String)
//  .sessionTimeout(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.authorizationEndpoint">authorizationEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#authorization_endpoint AlbListener#authorization_endpoint}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#client_id AlbListener#client_id}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#client_secret AlbListener#client_secret}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.issuer">issuer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#issuer AlbListener#issuer}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.tokenEndpoint">tokenEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#token_endpoint AlbListener#token_endpoint}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.userInfoEndpoint">userInfoEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#user_info_endpoint AlbListener#user_info_endpoint}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.authenticationRequestExtraParams">authenticationRequestExtraParams</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#authentication_request_extra_params AlbListener#authentication_request_extra_params}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.onUnauthenticatedRequest">onUnauthenticatedRequest</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#on_unauthenticated_request AlbListener#on_unauthenticated_request}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.scope">scope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#scope AlbListener#scope}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.sessionCookieName">sessionCookieName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#session_cookie_name AlbListener#session_cookie_name}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.sessionTimeout">sessionTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#session_timeout AlbListener#session_timeout}. |

---

##### `authorizationEndpoint`<sup>Required</sup> <a name="authorizationEndpoint" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.authorizationEndpoint"></a>

```java
public java.lang.String getAuthorizationEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#authorization_endpoint AlbListener#authorization_endpoint}.

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#client_id AlbListener#client_id}.

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#client_secret AlbListener#client_secret}.

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#issuer AlbListener#issuer}.

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.tokenEndpoint"></a>

```java
public java.lang.String getTokenEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#token_endpoint AlbListener#token_endpoint}.

---

##### `userInfoEndpoint`<sup>Required</sup> <a name="userInfoEndpoint" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.userInfoEndpoint"></a>

```java
public java.lang.String getUserInfoEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#user_info_endpoint AlbListener#user_info_endpoint}.

---

##### `authenticationRequestExtraParams`<sup>Optional</sup> <a name="authenticationRequestExtraParams" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.authenticationRequestExtraParams"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAuthenticationRequestExtraParams();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#authentication_request_extra_params AlbListener#authentication_request_extra_params}.

---

##### `onUnauthenticatedRequest`<sup>Optional</sup> <a name="onUnauthenticatedRequest" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.onUnauthenticatedRequest"></a>

```java
public java.lang.String getOnUnauthenticatedRequest();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#on_unauthenticated_request AlbListener#on_unauthenticated_request}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#scope AlbListener#scope}.

---

##### `sessionCookieName`<sup>Optional</sup> <a name="sessionCookieName" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.sessionCookieName"></a>

```java
public java.lang.String getSessionCookieName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#session_cookie_name AlbListener#session_cookie_name}.

---

##### `sessionTimeout`<sup>Optional</sup> <a name="sessionTimeout" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc.property.sessionTimeout"></a>

```java
public java.lang.Number getSessionTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#session_timeout AlbListener#session_timeout}.

---

### AlbListenerDefaultActionFixedResponse <a name="AlbListenerDefaultActionFixedResponse" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponse.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.alb_listener.AlbListenerDefaultActionFixedResponse;

AlbListenerDefaultActionFixedResponse.builder()
    .contentType(java.lang.String)
//  .messageBody(java.lang.String)
//  .statusCode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponse.property.contentType">contentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#content_type AlbListener#content_type}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponse.property.messageBody">messageBody</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#message_body AlbListener#message_body}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponse.property.statusCode">statusCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#status_code AlbListener#status_code}. |

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponse.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#content_type AlbListener#content_type}.

---

##### `messageBody`<sup>Optional</sup> <a name="messageBody" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponse.property.messageBody"></a>

```java
public java.lang.String getMessageBody();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#message_body AlbListener#message_body}.

---

##### `statusCode`<sup>Optional</sup> <a name="statusCode" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponse.property.statusCode"></a>

```java
public java.lang.String getStatusCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#status_code AlbListener#status_code}.

---

### AlbListenerDefaultActionForward <a name="AlbListenerDefaultActionForward" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForward"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForward.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.alb_listener.AlbListenerDefaultActionForward;

AlbListenerDefaultActionForward.builder()
    .targetGroup(IResolvable)
    .targetGroup(java.util.List<AlbListenerDefaultActionForwardTargetGroup>)
//  .stickiness(AlbListenerDefaultActionForwardStickiness)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForward.property.targetGroup">targetGroup</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroup">AlbListenerDefaultActionForwardTargetGroup</a>></code> | target_group block. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForward.property.stickiness">stickiness</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickiness">AlbListenerDefaultActionForwardStickiness</a></code> | stickiness block. |

---

##### `targetGroup`<sup>Required</sup> <a name="targetGroup" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForward.property.targetGroup"></a>

```java
public java.lang.Object getTargetGroup();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroup">AlbListenerDefaultActionForwardTargetGroup</a>>

target_group block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#target_group AlbListener#target_group}

---

##### `stickiness`<sup>Optional</sup> <a name="stickiness" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForward.property.stickiness"></a>

```java
public AlbListenerDefaultActionForwardStickiness getStickiness();
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickiness">AlbListenerDefaultActionForwardStickiness</a>

stickiness block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#stickiness AlbListener#stickiness}

---

### AlbListenerDefaultActionForwardStickiness <a name="AlbListenerDefaultActionForwardStickiness" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickiness"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickiness.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.alb_listener.AlbListenerDefaultActionForwardStickiness;

AlbListenerDefaultActionForwardStickiness.builder()
    .duration(java.lang.Number)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickiness.property.duration">duration</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#duration AlbListener#duration}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickiness.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#enabled AlbListener#enabled}. |

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickiness.property.duration"></a>

```java
public java.lang.Number getDuration();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#duration AlbListener#duration}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickiness.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#enabled AlbListener#enabled}.

---

### AlbListenerDefaultActionForwardTargetGroup <a name="AlbListenerDefaultActionForwardTargetGroup" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.alb_listener.AlbListenerDefaultActionForwardTargetGroup;

AlbListenerDefaultActionForwardTargetGroup.builder()
    .arn(java.lang.String)
//  .weight(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroup.property.arn">arn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#arn AlbListener#arn}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroup.property.weight">weight</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#weight AlbListener#weight}. |

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroup.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#arn AlbListener#arn}.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroup.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#weight AlbListener#weight}.

---

### AlbListenerDefaultActionRedirect <a name="AlbListenerDefaultActionRedirect" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.alb_listener.AlbListenerDefaultActionRedirect;

AlbListenerDefaultActionRedirect.builder()
    .statusCode(java.lang.String)
//  .host(java.lang.String)
//  .path(java.lang.String)
//  .port(java.lang.String)
//  .protocol(java.lang.String)
//  .query(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect.property.statusCode">statusCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#status_code AlbListener#status_code}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect.property.host">host</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#host AlbListener#host}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#path AlbListener#path}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect.property.port">port</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#port AlbListener#port}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#protocol AlbListener#protocol}. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect.property.query">query</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#query AlbListener#query}. |

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect.property.statusCode"></a>

```java
public java.lang.String getStatusCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#status_code AlbListener#status_code}.

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#host AlbListener#host}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#path AlbListener#path}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect.property.port"></a>

```java
public java.lang.String getPort();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#port AlbListener#port}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#protocol AlbListener#protocol}.

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#query AlbListener#query}.

---

### AlbListenerTimeouts <a name="AlbListenerTimeouts" id="@cdktf/provider-aws.albListener.AlbListenerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albListener.AlbListenerTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.alb_listener.AlbListenerTimeouts;

AlbListenerTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#read AlbListener#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.albListener.AlbListenerTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb_listener#read AlbListener#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### AlbListenerDefaultActionAuthenticateCognitoOutputReference <a name="AlbListenerDefaultActionAuthenticateCognitoOutputReference" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.alb_listener.AlbListenerDefaultActionAuthenticateCognitoOutputReference;

new AlbListenerDefaultActionAuthenticateCognitoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.resetAuthenticationRequestExtraParams">resetAuthenticationRequestExtraParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.resetOnUnauthenticatedRequest">resetOnUnauthenticatedRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.resetSessionCookieName">resetSessionCookieName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.resetSessionTimeout">resetSessionTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthenticationRequestExtraParams` <a name="resetAuthenticationRequestExtraParams" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.resetAuthenticationRequestExtraParams"></a>

```java
public void resetAuthenticationRequestExtraParams()
```

##### `resetOnUnauthenticatedRequest` <a name="resetOnUnauthenticatedRequest" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.resetOnUnauthenticatedRequest"></a>

```java
public void resetOnUnauthenticatedRequest()
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.resetScope"></a>

```java
public void resetScope()
```

##### `resetSessionCookieName` <a name="resetSessionCookieName" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.resetSessionCookieName"></a>

```java
public void resetSessionCookieName()
```

##### `resetSessionTimeout` <a name="resetSessionTimeout" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.resetSessionTimeout"></a>

```java
public void resetSessionTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.authenticationRequestExtraParamsInput">authenticationRequestExtraParamsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.onUnauthenticatedRequestInput">onUnauthenticatedRequestInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.sessionCookieNameInput">sessionCookieNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.sessionTimeoutInput">sessionTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolArnInput">userPoolArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolClientIdInput">userPoolClientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolDomainInput">userPoolDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.authenticationRequestExtraParams">authenticationRequestExtraParams</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.onUnauthenticatedRequest">onUnauthenticatedRequest</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.sessionCookieName">sessionCookieName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.sessionTimeout">sessionTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolArn">userPoolArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolClientId">userPoolClientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolDomain">userPoolDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito">AlbListenerDefaultActionAuthenticateCognito</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authenticationRequestExtraParamsInput`<sup>Optional</sup> <a name="authenticationRequestExtraParamsInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.authenticationRequestExtraParamsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAuthenticationRequestExtraParamsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `onUnauthenticatedRequestInput`<sup>Optional</sup> <a name="onUnauthenticatedRequestInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.onUnauthenticatedRequestInput"></a>

```java
public java.lang.String getOnUnauthenticatedRequestInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `sessionCookieNameInput`<sup>Optional</sup> <a name="sessionCookieNameInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.sessionCookieNameInput"></a>

```java
public java.lang.String getSessionCookieNameInput();
```

- *Type:* java.lang.String

---

##### `sessionTimeoutInput`<sup>Optional</sup> <a name="sessionTimeoutInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.sessionTimeoutInput"></a>

```java
public java.lang.Number getSessionTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `userPoolArnInput`<sup>Optional</sup> <a name="userPoolArnInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolArnInput"></a>

```java
public java.lang.String getUserPoolArnInput();
```

- *Type:* java.lang.String

---

##### `userPoolClientIdInput`<sup>Optional</sup> <a name="userPoolClientIdInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolClientIdInput"></a>

```java
public java.lang.String getUserPoolClientIdInput();
```

- *Type:* java.lang.String

---

##### `userPoolDomainInput`<sup>Optional</sup> <a name="userPoolDomainInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolDomainInput"></a>

```java
public java.lang.String getUserPoolDomainInput();
```

- *Type:* java.lang.String

---

##### `authenticationRequestExtraParams`<sup>Required</sup> <a name="authenticationRequestExtraParams" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.authenticationRequestExtraParams"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAuthenticationRequestExtraParams();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `onUnauthenticatedRequest`<sup>Required</sup> <a name="onUnauthenticatedRequest" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.onUnauthenticatedRequest"></a>

```java
public java.lang.String getOnUnauthenticatedRequest();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `sessionCookieName`<sup>Required</sup> <a name="sessionCookieName" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.sessionCookieName"></a>

```java
public java.lang.String getSessionCookieName();
```

- *Type:* java.lang.String

---

##### `sessionTimeout`<sup>Required</sup> <a name="sessionTimeout" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.sessionTimeout"></a>

```java
public java.lang.Number getSessionTimeout();
```

- *Type:* java.lang.Number

---

##### `userPoolArn`<sup>Required</sup> <a name="userPoolArn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolArn"></a>

```java
public java.lang.String getUserPoolArn();
```

- *Type:* java.lang.String

---

##### `userPoolClientId`<sup>Required</sup> <a name="userPoolClientId" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolClientId"></a>

```java
public java.lang.String getUserPoolClientId();
```

- *Type:* java.lang.String

---

##### `userPoolDomain`<sup>Required</sup> <a name="userPoolDomain" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolDomain"></a>

```java
public java.lang.String getUserPoolDomain();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference.property.internalValue"></a>

```java
public AlbListenerDefaultActionAuthenticateCognito getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito">AlbListenerDefaultActionAuthenticateCognito</a>

---


### AlbListenerDefaultActionAuthenticateOidcOutputReference <a name="AlbListenerDefaultActionAuthenticateOidcOutputReference" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.alb_listener.AlbListenerDefaultActionAuthenticateOidcOutputReference;

new AlbListenerDefaultActionAuthenticateOidcOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.resetAuthenticationRequestExtraParams">resetAuthenticationRequestExtraParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.resetOnUnauthenticatedRequest">resetOnUnauthenticatedRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.resetSessionCookieName">resetSessionCookieName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.resetSessionTimeout">resetSessionTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthenticationRequestExtraParams` <a name="resetAuthenticationRequestExtraParams" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.resetAuthenticationRequestExtraParams"></a>

```java
public void resetAuthenticationRequestExtraParams()
```

##### `resetOnUnauthenticatedRequest` <a name="resetOnUnauthenticatedRequest" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.resetOnUnauthenticatedRequest"></a>

```java
public void resetOnUnauthenticatedRequest()
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.resetScope"></a>

```java
public void resetScope()
```

##### `resetSessionCookieName` <a name="resetSessionCookieName" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.resetSessionCookieName"></a>

```java
public void resetSessionCookieName()
```

##### `resetSessionTimeout` <a name="resetSessionTimeout" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.resetSessionTimeout"></a>

```java
public void resetSessionTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.authenticationRequestExtraParamsInput">authenticationRequestExtraParamsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.authorizationEndpointInput">authorizationEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.issuerInput">issuerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.onUnauthenticatedRequestInput">onUnauthenticatedRequestInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.sessionCookieNameInput">sessionCookieNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.sessionTimeoutInput">sessionTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.tokenEndpointInput">tokenEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.userInfoEndpointInput">userInfoEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.authenticationRequestExtraParams">authenticationRequestExtraParams</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.authorizationEndpoint">authorizationEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.issuer">issuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.onUnauthenticatedRequest">onUnauthenticatedRequest</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.sessionCookieName">sessionCookieName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.sessionTimeout">sessionTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.tokenEndpoint">tokenEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.userInfoEndpoint">userInfoEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc">AlbListenerDefaultActionAuthenticateOidc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authenticationRequestExtraParamsInput`<sup>Optional</sup> <a name="authenticationRequestExtraParamsInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.authenticationRequestExtraParamsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAuthenticationRequestExtraParamsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `authorizationEndpointInput`<sup>Optional</sup> <a name="authorizationEndpointInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.authorizationEndpointInput"></a>

```java
public java.lang.String getAuthorizationEndpointInput();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.issuerInput"></a>

```java
public java.lang.String getIssuerInput();
```

- *Type:* java.lang.String

---

##### `onUnauthenticatedRequestInput`<sup>Optional</sup> <a name="onUnauthenticatedRequestInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.onUnauthenticatedRequestInput"></a>

```java
public java.lang.String getOnUnauthenticatedRequestInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `sessionCookieNameInput`<sup>Optional</sup> <a name="sessionCookieNameInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.sessionCookieNameInput"></a>

```java
public java.lang.String getSessionCookieNameInput();
```

- *Type:* java.lang.String

---

##### `sessionTimeoutInput`<sup>Optional</sup> <a name="sessionTimeoutInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.sessionTimeoutInput"></a>

```java
public java.lang.Number getSessionTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `tokenEndpointInput`<sup>Optional</sup> <a name="tokenEndpointInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.tokenEndpointInput"></a>

```java
public java.lang.String getTokenEndpointInput();
```

- *Type:* java.lang.String

---

##### `userInfoEndpointInput`<sup>Optional</sup> <a name="userInfoEndpointInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.userInfoEndpointInput"></a>

```java
public java.lang.String getUserInfoEndpointInput();
```

- *Type:* java.lang.String

---

##### `authenticationRequestExtraParams`<sup>Required</sup> <a name="authenticationRequestExtraParams" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.authenticationRequestExtraParams"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAuthenticationRequestExtraParams();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `authorizationEndpoint`<sup>Required</sup> <a name="authorizationEndpoint" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.authorizationEndpoint"></a>

```java
public java.lang.String getAuthorizationEndpoint();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

---

##### `onUnauthenticatedRequest`<sup>Required</sup> <a name="onUnauthenticatedRequest" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.onUnauthenticatedRequest"></a>

```java
public java.lang.String getOnUnauthenticatedRequest();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `sessionCookieName`<sup>Required</sup> <a name="sessionCookieName" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.sessionCookieName"></a>

```java
public java.lang.String getSessionCookieName();
```

- *Type:* java.lang.String

---

##### `sessionTimeout`<sup>Required</sup> <a name="sessionTimeout" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.sessionTimeout"></a>

```java
public java.lang.Number getSessionTimeout();
```

- *Type:* java.lang.Number

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.tokenEndpoint"></a>

```java
public java.lang.String getTokenEndpoint();
```

- *Type:* java.lang.String

---

##### `userInfoEndpoint`<sup>Required</sup> <a name="userInfoEndpoint" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.userInfoEndpoint"></a>

```java
public java.lang.String getUserInfoEndpoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference.property.internalValue"></a>

```java
public AlbListenerDefaultActionAuthenticateOidc getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc">AlbListenerDefaultActionAuthenticateOidc</a>

---


### AlbListenerDefaultActionFixedResponseOutputReference <a name="AlbListenerDefaultActionFixedResponseOutputReference" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.alb_listener.AlbListenerDefaultActionFixedResponseOutputReference;

new AlbListenerDefaultActionFixedResponseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.resetMessageBody">resetMessageBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.resetStatusCode">resetStatusCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMessageBody` <a name="resetMessageBody" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.resetMessageBody"></a>

```java
public void resetMessageBody()
```

##### `resetStatusCode` <a name="resetStatusCode" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.resetStatusCode"></a>

```java
public void resetStatusCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.property.messageBodyInput">messageBodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.property.statusCodeInput">statusCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.property.contentType">contentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.property.messageBody">messageBody</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.property.statusCode">statusCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponse">AlbListenerDefaultActionFixedResponse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.property.contentTypeInput"></a>

```java
public java.lang.String getContentTypeInput();
```

- *Type:* java.lang.String

---

##### `messageBodyInput`<sup>Optional</sup> <a name="messageBodyInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.property.messageBodyInput"></a>

```java
public java.lang.String getMessageBodyInput();
```

- *Type:* java.lang.String

---

##### `statusCodeInput`<sup>Optional</sup> <a name="statusCodeInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.property.statusCodeInput"></a>

```java
public java.lang.String getStatusCodeInput();
```

- *Type:* java.lang.String

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

---

##### `messageBody`<sup>Required</sup> <a name="messageBody" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.property.messageBody"></a>

```java
public java.lang.String getMessageBody();
```

- *Type:* java.lang.String

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.property.statusCode"></a>

```java
public java.lang.String getStatusCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference.property.internalValue"></a>

```java
public AlbListenerDefaultActionFixedResponse getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponse">AlbListenerDefaultActionFixedResponse</a>

---


### AlbListenerDefaultActionForwardOutputReference <a name="AlbListenerDefaultActionForwardOutputReference" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.alb_listener.AlbListenerDefaultActionForwardOutputReference;

new AlbListenerDefaultActionForwardOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.putStickiness">putStickiness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.putTargetGroup">putTargetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.resetStickiness">resetStickiness</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStickiness` <a name="putStickiness" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.putStickiness"></a>

```java
public void putStickiness(AlbListenerDefaultActionForwardStickiness value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.putStickiness.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickiness">AlbListenerDefaultActionForwardStickiness</a>

---

##### `putTargetGroup` <a name="putTargetGroup" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.putTargetGroup"></a>

```java
public void putTargetGroup(IResolvable OR java.util.List<AlbListenerDefaultActionForwardTargetGroup> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.putTargetGroup.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroup">AlbListenerDefaultActionForwardTargetGroup</a>>

---

##### `resetStickiness` <a name="resetStickiness" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.resetStickiness"></a>

```java
public void resetStickiness()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.property.stickiness">stickiness</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference">AlbListenerDefaultActionForwardStickinessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.property.targetGroup">targetGroup</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList">AlbListenerDefaultActionForwardTargetGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.property.stickinessInput">stickinessInput</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickiness">AlbListenerDefaultActionForwardStickiness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.property.targetGroupInput">targetGroupInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroup">AlbListenerDefaultActionForwardTargetGroup</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForward">AlbListenerDefaultActionForward</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `stickiness`<sup>Required</sup> <a name="stickiness" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.property.stickiness"></a>

```java
public AlbListenerDefaultActionForwardStickinessOutputReference getStickiness();
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference">AlbListenerDefaultActionForwardStickinessOutputReference</a>

---

##### `targetGroup`<sup>Required</sup> <a name="targetGroup" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.property.targetGroup"></a>

```java
public AlbListenerDefaultActionForwardTargetGroupList getTargetGroup();
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList">AlbListenerDefaultActionForwardTargetGroupList</a>

---

##### `stickinessInput`<sup>Optional</sup> <a name="stickinessInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.property.stickinessInput"></a>

```java
public AlbListenerDefaultActionForwardStickiness getStickinessInput();
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickiness">AlbListenerDefaultActionForwardStickiness</a>

---

##### `targetGroupInput`<sup>Optional</sup> <a name="targetGroupInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.property.targetGroupInput"></a>

```java
public java.lang.Object getTargetGroupInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroup">AlbListenerDefaultActionForwardTargetGroup</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference.property.internalValue"></a>

```java
public AlbListenerDefaultActionForward getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForward">AlbListenerDefaultActionForward</a>

---


### AlbListenerDefaultActionForwardStickinessOutputReference <a name="AlbListenerDefaultActionForwardStickinessOutputReference" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.alb_listener.AlbListenerDefaultActionForwardStickinessOutputReference;

new AlbListenerDefaultActionForwardStickinessOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.property.durationInput">durationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.property.duration">duration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickiness">AlbListenerDefaultActionForwardStickiness</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.property.durationInput"></a>

```java
public java.lang.Number getDurationInput();
```

- *Type:* java.lang.Number

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.property.duration"></a>

```java
public java.lang.Number getDuration();
```

- *Type:* java.lang.Number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickinessOutputReference.property.internalValue"></a>

```java
public AlbListenerDefaultActionForwardStickiness getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardStickiness">AlbListenerDefaultActionForwardStickiness</a>

---


### AlbListenerDefaultActionForwardTargetGroupList <a name="AlbListenerDefaultActionForwardTargetGroupList" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.alb_listener.AlbListenerDefaultActionForwardTargetGroupList;

new AlbListenerDefaultActionForwardTargetGroupList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.get"></a>

```java
public AlbListenerDefaultActionForwardTargetGroupOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroup">AlbListenerDefaultActionForwardTargetGroup</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroup">AlbListenerDefaultActionForwardTargetGroup</a>>

---


### AlbListenerDefaultActionForwardTargetGroupOutputReference <a name="AlbListenerDefaultActionForwardTargetGroupOutputReference" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.alb_listener.AlbListenerDefaultActionForwardTargetGroupOutputReference;

new AlbListenerDefaultActionForwardTargetGroupOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWeight` <a name="resetWeight" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.resetWeight"></a>

```java
public void resetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.property.arnInput">arnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.property.weightInput">weightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroup">AlbListenerDefaultActionForwardTargetGroup</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.property.arnInput"></a>

```java
public java.lang.String getArnInput();
```

- *Type:* java.lang.String

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.property.weightInput"></a>

```java
public java.lang.Number getWeightInput();
```

- *Type:* java.lang.Number

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroupOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardTargetGroup">AlbListenerDefaultActionForwardTargetGroup</a> OR com.hashicorp.cdktf.IResolvable

---


### AlbListenerDefaultActionList <a name="AlbListenerDefaultActionList" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.alb_listener.AlbListenerDefaultActionList;

new AlbListenerDefaultActionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.get"></a>

```java
public AlbListenerDefaultActionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultAction">AlbListenerDefaultAction</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultAction">AlbListenerDefaultAction</a>>

---


### AlbListenerDefaultActionOutputReference <a name="AlbListenerDefaultActionOutputReference" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.alb_listener.AlbListenerDefaultActionOutputReference;

new AlbListenerDefaultActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putAuthenticateCognito">putAuthenticateCognito</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putAuthenticateOidc">putAuthenticateOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putFixedResponse">putFixedResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putForward">putForward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putRedirect">putRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.resetAuthenticateCognito">resetAuthenticateCognito</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.resetAuthenticateOidc">resetAuthenticateOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.resetFixedResponse">resetFixedResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.resetForward">resetForward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.resetRedirect">resetRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.resetTargetGroupArn">resetTargetGroupArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthenticateCognito` <a name="putAuthenticateCognito" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putAuthenticateCognito"></a>

```java
public void putAuthenticateCognito(AlbListenerDefaultActionAuthenticateCognito value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putAuthenticateCognito.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito">AlbListenerDefaultActionAuthenticateCognito</a>

---

##### `putAuthenticateOidc` <a name="putAuthenticateOidc" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putAuthenticateOidc"></a>

```java
public void putAuthenticateOidc(AlbListenerDefaultActionAuthenticateOidc value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putAuthenticateOidc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc">AlbListenerDefaultActionAuthenticateOidc</a>

---

##### `putFixedResponse` <a name="putFixedResponse" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putFixedResponse"></a>

```java
public void putFixedResponse(AlbListenerDefaultActionFixedResponse value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putFixedResponse.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponse">AlbListenerDefaultActionFixedResponse</a>

---

##### `putForward` <a name="putForward" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putForward"></a>

```java
public void putForward(AlbListenerDefaultActionForward value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putForward.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForward">AlbListenerDefaultActionForward</a>

---

##### `putRedirect` <a name="putRedirect" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putRedirect"></a>

```java
public void putRedirect(AlbListenerDefaultActionRedirect value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.putRedirect.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect">AlbListenerDefaultActionRedirect</a>

---

##### `resetAuthenticateCognito` <a name="resetAuthenticateCognito" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.resetAuthenticateCognito"></a>

```java
public void resetAuthenticateCognito()
```

##### `resetAuthenticateOidc` <a name="resetAuthenticateOidc" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.resetAuthenticateOidc"></a>

```java
public void resetAuthenticateOidc()
```

##### `resetFixedResponse` <a name="resetFixedResponse" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.resetFixedResponse"></a>

```java
public void resetFixedResponse()
```

##### `resetForward` <a name="resetForward" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.resetForward"></a>

```java
public void resetForward()
```

##### `resetOrder` <a name="resetOrder" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.resetOrder"></a>

```java
public void resetOrder()
```

##### `resetRedirect` <a name="resetRedirect" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.resetRedirect"></a>

```java
public void resetRedirect()
```

##### `resetTargetGroupArn` <a name="resetTargetGroupArn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.resetTargetGroupArn"></a>

```java
public void resetTargetGroupArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.authenticateCognito">authenticateCognito</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference">AlbListenerDefaultActionAuthenticateCognitoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.authenticateOidc">authenticateOidc</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference">AlbListenerDefaultActionAuthenticateOidcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.fixedResponse">fixedResponse</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference">AlbListenerDefaultActionFixedResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.forward">forward</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference">AlbListenerDefaultActionForwardOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.redirect">redirect</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference">AlbListenerDefaultActionRedirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.authenticateCognitoInput">authenticateCognitoInput</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito">AlbListenerDefaultActionAuthenticateCognito</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.authenticateOidcInput">authenticateOidcInput</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc">AlbListenerDefaultActionAuthenticateOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.fixedResponseInput">fixedResponseInput</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponse">AlbListenerDefaultActionFixedResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.forwardInput">forwardInput</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForward">AlbListenerDefaultActionForward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.orderInput">orderInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.redirectInput">redirectInput</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect">AlbListenerDefaultActionRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.targetGroupArnInput">targetGroupArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.order">order</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.targetGroupArn">targetGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultAction">AlbListenerDefaultAction</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authenticateCognito`<sup>Required</sup> <a name="authenticateCognito" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.authenticateCognito"></a>

```java
public AlbListenerDefaultActionAuthenticateCognitoOutputReference getAuthenticateCognito();
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognitoOutputReference">AlbListenerDefaultActionAuthenticateCognitoOutputReference</a>

---

##### `authenticateOidc`<sup>Required</sup> <a name="authenticateOidc" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.authenticateOidc"></a>

```java
public AlbListenerDefaultActionAuthenticateOidcOutputReference getAuthenticateOidc();
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidcOutputReference">AlbListenerDefaultActionAuthenticateOidcOutputReference</a>

---

##### `fixedResponse`<sup>Required</sup> <a name="fixedResponse" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.fixedResponse"></a>

```java
public AlbListenerDefaultActionFixedResponseOutputReference getFixedResponse();
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponseOutputReference">AlbListenerDefaultActionFixedResponseOutputReference</a>

---

##### `forward`<sup>Required</sup> <a name="forward" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.forward"></a>

```java
public AlbListenerDefaultActionForwardOutputReference getForward();
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForwardOutputReference">AlbListenerDefaultActionForwardOutputReference</a>

---

##### `redirect`<sup>Required</sup> <a name="redirect" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.redirect"></a>

```java
public AlbListenerDefaultActionRedirectOutputReference getRedirect();
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference">AlbListenerDefaultActionRedirectOutputReference</a>

---

##### `authenticateCognitoInput`<sup>Optional</sup> <a name="authenticateCognitoInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.authenticateCognitoInput"></a>

```java
public AlbListenerDefaultActionAuthenticateCognito getAuthenticateCognitoInput();
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateCognito">AlbListenerDefaultActionAuthenticateCognito</a>

---

##### `authenticateOidcInput`<sup>Optional</sup> <a name="authenticateOidcInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.authenticateOidcInput"></a>

```java
public AlbListenerDefaultActionAuthenticateOidc getAuthenticateOidcInput();
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionAuthenticateOidc">AlbListenerDefaultActionAuthenticateOidc</a>

---

##### `fixedResponseInput`<sup>Optional</sup> <a name="fixedResponseInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.fixedResponseInput"></a>

```java
public AlbListenerDefaultActionFixedResponse getFixedResponseInput();
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionFixedResponse">AlbListenerDefaultActionFixedResponse</a>

---

##### `forwardInput`<sup>Optional</sup> <a name="forwardInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.forwardInput"></a>

```java
public AlbListenerDefaultActionForward getForwardInput();
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionForward">AlbListenerDefaultActionForward</a>

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.orderInput"></a>

```java
public java.lang.Number getOrderInput();
```

- *Type:* java.lang.Number

---

##### `redirectInput`<sup>Optional</sup> <a name="redirectInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.redirectInput"></a>

```java
public AlbListenerDefaultActionRedirect getRedirectInput();
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect">AlbListenerDefaultActionRedirect</a>

---

##### `targetGroupArnInput`<sup>Optional</sup> <a name="targetGroupArnInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.targetGroupArnInput"></a>

```java
public java.lang.String getTargetGroupArnInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.order"></a>

```java
public java.lang.Number getOrder();
```

- *Type:* java.lang.Number

---

##### `targetGroupArn`<sup>Required</sup> <a name="targetGroupArn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.targetGroupArn"></a>

```java
public java.lang.String getTargetGroupArn();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultAction">AlbListenerDefaultAction</a> OR com.hashicorp.cdktf.IResolvable

---


### AlbListenerDefaultActionRedirectOutputReference <a name="AlbListenerDefaultActionRedirectOutputReference" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.alb_listener.AlbListenerDefaultActionRedirectOutputReference;

new AlbListenerDefaultActionRedirectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.resetQuery">resetQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHost` <a name="resetHost" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.resetHost"></a>

```java
public void resetHost()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetQuery` <a name="resetQuery" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.resetQuery"></a>

```java
public void resetQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.portInput">portInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.queryInput">queryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.statusCodeInput">statusCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.port">port</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.statusCode">statusCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect">AlbListenerDefaultActionRedirect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.portInput"></a>

```java
public java.lang.String getPortInput();
```

- *Type:* java.lang.String

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.queryInput"></a>

```java
public java.lang.String getQueryInput();
```

- *Type:* java.lang.String

---

##### `statusCodeInput`<sup>Optional</sup> <a name="statusCodeInput" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.statusCodeInput"></a>

```java
public java.lang.String getStatusCodeInput();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.port"></a>

```java
public java.lang.String getPort();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.statusCode"></a>

```java
public java.lang.String getStatusCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirectOutputReference.property.internalValue"></a>

```java
public AlbListenerDefaultActionRedirect getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerDefaultActionRedirect">AlbListenerDefaultActionRedirect</a>

---


### AlbListenerTimeoutsOutputReference <a name="AlbListenerTimeoutsOutputReference" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.alb_listener.AlbListenerTimeoutsOutputReference;

new AlbListenerTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.albListener.AlbListenerTimeouts">AlbListenerTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.albListener.AlbListenerTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.albListener.AlbListenerTimeouts">AlbListenerTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



