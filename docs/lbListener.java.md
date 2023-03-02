# `lbListener` Submodule <a name="`lbListener` Submodule" id="@cdktf/provider-aws.lbListener"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbListener <a name="LbListener" id="@cdktf/provider-aws.lbListener.LbListener"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lb_listener aws_lb_listener}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListener.LbListener.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lb_listener.LbListener;

LbListener.Builder.create(Construct scope, java.lang.String id)
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
    .defaultAction(java.util.List<LbListenerDefaultAction>)
    .loadBalancerArn(java.lang.String)
//  .alpnPolicy(java.lang.String)
//  .certificateArn(java.lang.String)
//  .id(java.lang.String)
//  .port(java.lang.Number)
//  .protocol(java.lang.String)
//  .sslPolicy(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(LbListenerTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.Initializer.parameter.defaultAction">defaultAction</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultAction">LbListenerDefaultAction</a>></code> | default_action block. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.Initializer.parameter.loadBalancerArn">loadBalancerArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#load_balancer_arn LbListener#load_balancer_arn}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.Initializer.parameter.alpnPolicy">alpnPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#alpn_policy LbListener#alpn_policy}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.Initializer.parameter.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#certificate_arn LbListener#certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#id LbListener#id}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.Initializer.parameter.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#port LbListener#port}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.Initializer.parameter.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#protocol LbListener#protocol}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.Initializer.parameter.sslPolicy">sslPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#ssl_policy LbListener#ssl_policy}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#tags LbListener#tags}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#tags_all LbListener#tags_all}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeouts">LbListenerTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lbListener.LbListener.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lbListener.LbListener.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lbListener.LbListener.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lbListener.LbListener.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lbListener.LbListener.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lbListener.LbListener.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lbListener.LbListener.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lbListener.LbListener.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lbListener.LbListener.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="@cdktf/provider-aws.lbListener.LbListener.Initializer.parameter.defaultAction"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultAction">LbListenerDefaultAction</a>>

default_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#default_action LbListener#default_action}

---

##### `loadBalancerArn`<sup>Required</sup> <a name="loadBalancerArn" id="@cdktf/provider-aws.lbListener.LbListener.Initializer.parameter.loadBalancerArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#load_balancer_arn LbListener#load_balancer_arn}.

---

##### `alpnPolicy`<sup>Optional</sup> <a name="alpnPolicy" id="@cdktf/provider-aws.lbListener.LbListener.Initializer.parameter.alpnPolicy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#alpn_policy LbListener#alpn_policy}.

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="@cdktf/provider-aws.lbListener.LbListener.Initializer.parameter.certificateArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#certificate_arn LbListener#certificate_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lbListener.LbListener.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#id LbListener#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.lbListener.LbListener.Initializer.parameter.port"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#port LbListener#port}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.lbListener.LbListener.Initializer.parameter.protocol"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#protocol LbListener#protocol}.

---

##### `sslPolicy`<sup>Optional</sup> <a name="sslPolicy" id="@cdktf/provider-aws.lbListener.LbListener.Initializer.parameter.sslPolicy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#ssl_policy LbListener#ssl_policy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.lbListener.LbListener.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#tags LbListener#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.lbListener.LbListener.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#tags_all LbListener#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lbListener.LbListener.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerTimeouts">LbListenerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#timeouts LbListener#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.putDefaultAction">putDefaultAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.resetAlpnPolicy">resetAlpnPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.resetCertificateArn">resetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.resetSslPolicy">resetSslPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbListener.LbListener.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.lbListener.LbListener.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lbListener.LbListener.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListener.LbListener.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.lbListener.LbListener.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.lbListener.LbListener.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.lbListener.LbListener.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.lbListener.LbListener.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.lbListener.LbListener.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lbListener.LbListener.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListener.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lbListener.LbListener.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListener.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lbListener.LbListener.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListener.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lbListener.LbListener.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListener.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lbListener.LbListener.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListener.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lbListener.LbListener.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListener.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lbListener.LbListener.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListener.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lbListener.LbListener.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListener.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lbListener.LbListener.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListener.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lbListener.LbListener.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListener.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putDefaultAction` <a name="putDefaultAction" id="@cdktf/provider-aws.lbListener.LbListener.putDefaultAction"></a>

```java
public void putDefaultAction(IResolvable OR java.util.List<LbListenerDefaultAction> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListener.LbListener.putDefaultAction.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultAction">LbListenerDefaultAction</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.lbListener.LbListener.putTimeouts"></a>

```java
public void putTimeouts(LbListenerTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListener.LbListener.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerTimeouts">LbListenerTimeouts</a>

---

##### `resetAlpnPolicy` <a name="resetAlpnPolicy" id="@cdktf/provider-aws.lbListener.LbListener.resetAlpnPolicy"></a>

```java
public void resetAlpnPolicy()
```

##### `resetCertificateArn` <a name="resetCertificateArn" id="@cdktf/provider-aws.lbListener.LbListener.resetCertificateArn"></a>

```java
public void resetCertificateArn()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.lbListener.LbListener.resetId"></a>

```java
public void resetId()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-aws.lbListener.LbListener.resetPort"></a>

```java
public void resetPort()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-aws.lbListener.LbListener.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetSslPolicy` <a name="resetSslPolicy" id="@cdktf/provider-aws.lbListener.LbListener.resetSslPolicy"></a>

```java
public void resetSslPolicy()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.lbListener.LbListener.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.lbListener.LbListener.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.lbListener.LbListener.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.lbListener.LbListener.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.lb_listener.LbListener;

LbListener.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lbListener.LbListener.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.lbListener.LbListener.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.lb_listener.LbListener;

LbListener.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lbListener.LbListener.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.lbListener.LbListener.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.lb_listener.LbListener;

LbListener.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lbListener.LbListener.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.defaultAction">defaultAction</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionList">LbListenerDefaultActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference">LbListenerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.alpnPolicyInput">alpnPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.certificateArnInput">certificateArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.defaultActionInput">defaultActionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultAction">LbListenerDefaultAction</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.loadBalancerArnInput">loadBalancerArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.sslPolicyInput">sslPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeouts">LbListenerTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.alpnPolicy">alpnPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.loadBalancerArn">loadBalancerArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.sslPolicy">sslPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lbListener.LbListener.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.lbListener.LbListener.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbListener.LbListener.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.lbListener.LbListener.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.lbListener.LbListener.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.lbListener.LbListener.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.lbListener.LbListener.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lbListener.LbListener.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lbListener.LbListener.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lbListener.LbListener.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lbListener.LbListener.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lbListener.LbListener.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lbListener.LbListener.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lbListener.LbListener.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.lbListener.LbListener.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="@cdktf/provider-aws.lbListener.LbListener.property.defaultAction"></a>

```java
public LbListenerDefaultActionList getDefaultAction();
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionList">LbListenerDefaultActionList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.lbListener.LbListener.property.timeouts"></a>

```java
public LbListenerTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference">LbListenerTimeoutsOutputReference</a>

---

##### `alpnPolicyInput`<sup>Optional</sup> <a name="alpnPolicyInput" id="@cdktf/provider-aws.lbListener.LbListener.property.alpnPolicyInput"></a>

```java
public java.lang.String getAlpnPolicyInput();
```

- *Type:* java.lang.String

---

##### `certificateArnInput`<sup>Optional</sup> <a name="certificateArnInput" id="@cdktf/provider-aws.lbListener.LbListener.property.certificateArnInput"></a>

```java
public java.lang.String getCertificateArnInput();
```

- *Type:* java.lang.String

---

##### `defaultActionInput`<sup>Optional</sup> <a name="defaultActionInput" id="@cdktf/provider-aws.lbListener.LbListener.property.defaultActionInput"></a>

```java
public java.lang.Object getDefaultActionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultAction">LbListenerDefaultAction</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.lbListener.LbListener.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `loadBalancerArnInput`<sup>Optional</sup> <a name="loadBalancerArnInput" id="@cdktf/provider-aws.lbListener.LbListener.property.loadBalancerArnInput"></a>

```java
public java.lang.String getLoadBalancerArnInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.lbListener.LbListener.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-aws.lbListener.LbListener.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `sslPolicyInput`<sup>Optional</sup> <a name="sslPolicyInput" id="@cdktf/provider-aws.lbListener.LbListener.property.sslPolicyInput"></a>

```java
public java.lang.String getSslPolicyInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.lbListener.LbListener.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.lbListener.LbListener.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.lbListener.LbListener.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerTimeouts">LbListenerTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `alpnPolicy`<sup>Required</sup> <a name="alpnPolicy" id="@cdktf/provider-aws.lbListener.LbListener.property.alpnPolicy"></a>

```java
public java.lang.String getAlpnPolicy();
```

- *Type:* java.lang.String

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktf/provider-aws.lbListener.LbListener.property.certificateArn"></a>

```java
public java.lang.String getCertificateArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lbListener.LbListener.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `loadBalancerArn`<sup>Required</sup> <a name="loadBalancerArn" id="@cdktf/provider-aws.lbListener.LbListener.property.loadBalancerArn"></a>

```java
public java.lang.String getLoadBalancerArn();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.lbListener.LbListener.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.lbListener.LbListener.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `sslPolicy`<sup>Required</sup> <a name="sslPolicy" id="@cdktf/provider-aws.lbListener.LbListener.property.sslPolicy"></a>

```java
public java.lang.String getSslPolicy();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.lbListener.LbListener.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.lbListener.LbListener.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListener.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lbListener.LbListener.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LbListenerConfig <a name="LbListenerConfig" id="@cdktf/provider-aws.lbListener.LbListenerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListener.LbListenerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lb_listener.LbListenerConfig;

LbListenerConfig.builder()
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
    .defaultAction(java.util.List<LbListenerDefaultAction>)
    .loadBalancerArn(java.lang.String)
//  .alpnPolicy(java.lang.String)
//  .certificateArn(java.lang.String)
//  .id(java.lang.String)
//  .port(java.lang.Number)
//  .protocol(java.lang.String)
//  .sslPolicy(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(LbListenerTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.defaultAction">defaultAction</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultAction">LbListenerDefaultAction</a>></code> | default_action block. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.loadBalancerArn">loadBalancerArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#load_balancer_arn LbListener#load_balancer_arn}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.alpnPolicy">alpnPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#alpn_policy LbListener#alpn_policy}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#certificate_arn LbListener#certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#id LbListener#id}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#port LbListener#port}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#protocol LbListener#protocol}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.sslPolicy">sslPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#ssl_policy LbListener#ssl_policy}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#tags LbListener#tags}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#tags_all LbListener#tags_all}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeouts">LbListenerTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.defaultAction"></a>

```java
public java.lang.Object getDefaultAction();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultAction">LbListenerDefaultAction</a>>

default_action block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#default_action LbListener#default_action}

---

##### `loadBalancerArn`<sup>Required</sup> <a name="loadBalancerArn" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.loadBalancerArn"></a>

```java
public java.lang.String getLoadBalancerArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#load_balancer_arn LbListener#load_balancer_arn}.

---

##### `alpnPolicy`<sup>Optional</sup> <a name="alpnPolicy" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.alpnPolicy"></a>

```java
public java.lang.String getAlpnPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#alpn_policy LbListener#alpn_policy}.

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.certificateArn"></a>

```java
public java.lang.String getCertificateArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#certificate_arn LbListener#certificate_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#id LbListener#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#port LbListener#port}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#protocol LbListener#protocol}.

---

##### `sslPolicy`<sup>Optional</sup> <a name="sslPolicy" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.sslPolicy"></a>

```java
public java.lang.String getSslPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#ssl_policy LbListener#ssl_policy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#tags LbListener#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#tags_all LbListener#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.lbListener.LbListenerConfig.property.timeouts"></a>

```java
public LbListenerTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerTimeouts">LbListenerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#timeouts LbListener#timeouts}

---

### LbListenerDefaultAction <a name="LbListenerDefaultAction" id="@cdktf/provider-aws.lbListener.LbListenerDefaultAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListener.LbListenerDefaultAction.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lb_listener.LbListenerDefaultAction;

LbListenerDefaultAction.builder()
    .type(java.lang.String)
//  .authenticateCognito(LbListenerDefaultActionAuthenticateCognito)
//  .authenticateOidc(LbListenerDefaultActionAuthenticateOidc)
//  .fixedResponse(LbListenerDefaultActionFixedResponse)
//  .forward(LbListenerDefaultActionForward)
//  .order(java.lang.Number)
//  .redirect(LbListenerDefaultActionRedirect)
//  .targetGroupArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultAction.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#type LbListener#type}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultAction.property.authenticateCognito">authenticateCognito</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito">LbListenerDefaultActionAuthenticateCognito</a></code> | authenticate_cognito block. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultAction.property.authenticateOidc">authenticateOidc</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc">LbListenerDefaultActionAuthenticateOidc</a></code> | authenticate_oidc block. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultAction.property.fixedResponse">fixedResponse</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponse">LbListenerDefaultActionFixedResponse</a></code> | fixed_response block. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultAction.property.forward">forward</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForward">LbListenerDefaultActionForward</a></code> | forward block. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultAction.property.order">order</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#order LbListener#order}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultAction.property.redirect">redirect</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect">LbListenerDefaultActionRedirect</a></code> | redirect block. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultAction.property.targetGroupArn">targetGroupArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#target_group_arn LbListener#target_group_arn}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.lbListener.LbListenerDefaultAction.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#type LbListener#type}.

---

##### `authenticateCognito`<sup>Optional</sup> <a name="authenticateCognito" id="@cdktf/provider-aws.lbListener.LbListenerDefaultAction.property.authenticateCognito"></a>

```java
public LbListenerDefaultActionAuthenticateCognito getAuthenticateCognito();
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito">LbListenerDefaultActionAuthenticateCognito</a>

authenticate_cognito block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#authenticate_cognito LbListener#authenticate_cognito}

---

##### `authenticateOidc`<sup>Optional</sup> <a name="authenticateOidc" id="@cdktf/provider-aws.lbListener.LbListenerDefaultAction.property.authenticateOidc"></a>

```java
public LbListenerDefaultActionAuthenticateOidc getAuthenticateOidc();
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc">LbListenerDefaultActionAuthenticateOidc</a>

authenticate_oidc block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#authenticate_oidc LbListener#authenticate_oidc}

---

##### `fixedResponse`<sup>Optional</sup> <a name="fixedResponse" id="@cdktf/provider-aws.lbListener.LbListenerDefaultAction.property.fixedResponse"></a>

```java
public LbListenerDefaultActionFixedResponse getFixedResponse();
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponse">LbListenerDefaultActionFixedResponse</a>

fixed_response block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#fixed_response LbListener#fixed_response}

---

##### `forward`<sup>Optional</sup> <a name="forward" id="@cdktf/provider-aws.lbListener.LbListenerDefaultAction.property.forward"></a>

```java
public LbListenerDefaultActionForward getForward();
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForward">LbListenerDefaultActionForward</a>

forward block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#forward LbListener#forward}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-aws.lbListener.LbListenerDefaultAction.property.order"></a>

```java
public java.lang.Number getOrder();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#order LbListener#order}.

---

##### `redirect`<sup>Optional</sup> <a name="redirect" id="@cdktf/provider-aws.lbListener.LbListenerDefaultAction.property.redirect"></a>

```java
public LbListenerDefaultActionRedirect getRedirect();
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect">LbListenerDefaultActionRedirect</a>

redirect block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#redirect LbListener#redirect}

---

##### `targetGroupArn`<sup>Optional</sup> <a name="targetGroupArn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultAction.property.targetGroupArn"></a>

```java
public java.lang.String getTargetGroupArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#target_group_arn LbListener#target_group_arn}.

---

### LbListenerDefaultActionAuthenticateCognito <a name="LbListenerDefaultActionAuthenticateCognito" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lb_listener.LbListenerDefaultActionAuthenticateCognito;

LbListenerDefaultActionAuthenticateCognito.builder()
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
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito.property.userPoolArn">userPoolArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#user_pool_arn LbListener#user_pool_arn}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito.property.userPoolClientId">userPoolClientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#user_pool_client_id LbListener#user_pool_client_id}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito.property.userPoolDomain">userPoolDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#user_pool_domain LbListener#user_pool_domain}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito.property.authenticationRequestExtraParams">authenticationRequestExtraParams</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#authentication_request_extra_params LbListener#authentication_request_extra_params}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito.property.onUnauthenticatedRequest">onUnauthenticatedRequest</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#on_unauthenticated_request LbListener#on_unauthenticated_request}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito.property.scope">scope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#scope LbListener#scope}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito.property.sessionCookieName">sessionCookieName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#session_cookie_name LbListener#session_cookie_name}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito.property.sessionTimeout">sessionTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#session_timeout LbListener#session_timeout}. |

---

##### `userPoolArn`<sup>Required</sup> <a name="userPoolArn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito.property.userPoolArn"></a>

```java
public java.lang.String getUserPoolArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#user_pool_arn LbListener#user_pool_arn}.

---

##### `userPoolClientId`<sup>Required</sup> <a name="userPoolClientId" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito.property.userPoolClientId"></a>

```java
public java.lang.String getUserPoolClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#user_pool_client_id LbListener#user_pool_client_id}.

---

##### `userPoolDomain`<sup>Required</sup> <a name="userPoolDomain" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito.property.userPoolDomain"></a>

```java
public java.lang.String getUserPoolDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#user_pool_domain LbListener#user_pool_domain}.

---

##### `authenticationRequestExtraParams`<sup>Optional</sup> <a name="authenticationRequestExtraParams" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito.property.authenticationRequestExtraParams"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAuthenticationRequestExtraParams();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#authentication_request_extra_params LbListener#authentication_request_extra_params}.

---

##### `onUnauthenticatedRequest`<sup>Optional</sup> <a name="onUnauthenticatedRequest" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito.property.onUnauthenticatedRequest"></a>

```java
public java.lang.String getOnUnauthenticatedRequest();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#on_unauthenticated_request LbListener#on_unauthenticated_request}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#scope LbListener#scope}.

---

##### `sessionCookieName`<sup>Optional</sup> <a name="sessionCookieName" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito.property.sessionCookieName"></a>

```java
public java.lang.String getSessionCookieName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#session_cookie_name LbListener#session_cookie_name}.

---

##### `sessionTimeout`<sup>Optional</sup> <a name="sessionTimeout" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito.property.sessionTimeout"></a>

```java
public java.lang.Number getSessionTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#session_timeout LbListener#session_timeout}.

---

### LbListenerDefaultActionAuthenticateOidc <a name="LbListenerDefaultActionAuthenticateOidc" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lb_listener.LbListenerDefaultActionAuthenticateOidc;

LbListenerDefaultActionAuthenticateOidc.builder()
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
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.authorizationEndpoint">authorizationEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#authorization_endpoint LbListener#authorization_endpoint}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.clientId">clientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#client_id LbListener#client_id}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#client_secret LbListener#client_secret}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.issuer">issuer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#issuer LbListener#issuer}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.tokenEndpoint">tokenEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#token_endpoint LbListener#token_endpoint}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.userInfoEndpoint">userInfoEndpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#user_info_endpoint LbListener#user_info_endpoint}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.authenticationRequestExtraParams">authenticationRequestExtraParams</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#authentication_request_extra_params LbListener#authentication_request_extra_params}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.onUnauthenticatedRequest">onUnauthenticatedRequest</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#on_unauthenticated_request LbListener#on_unauthenticated_request}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.scope">scope</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#scope LbListener#scope}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.sessionCookieName">sessionCookieName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#session_cookie_name LbListener#session_cookie_name}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.sessionTimeout">sessionTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#session_timeout LbListener#session_timeout}. |

---

##### `authorizationEndpoint`<sup>Required</sup> <a name="authorizationEndpoint" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.authorizationEndpoint"></a>

```java
public java.lang.String getAuthorizationEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#authorization_endpoint LbListener#authorization_endpoint}.

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#client_id LbListener#client_id}.

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#client_secret LbListener#client_secret}.

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#issuer LbListener#issuer}.

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.tokenEndpoint"></a>

```java
public java.lang.String getTokenEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#token_endpoint LbListener#token_endpoint}.

---

##### `userInfoEndpoint`<sup>Required</sup> <a name="userInfoEndpoint" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.userInfoEndpoint"></a>

```java
public java.lang.String getUserInfoEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#user_info_endpoint LbListener#user_info_endpoint}.

---

##### `authenticationRequestExtraParams`<sup>Optional</sup> <a name="authenticationRequestExtraParams" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.authenticationRequestExtraParams"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAuthenticationRequestExtraParams();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#authentication_request_extra_params LbListener#authentication_request_extra_params}.

---

##### `onUnauthenticatedRequest`<sup>Optional</sup> <a name="onUnauthenticatedRequest" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.onUnauthenticatedRequest"></a>

```java
public java.lang.String getOnUnauthenticatedRequest();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#on_unauthenticated_request LbListener#on_unauthenticated_request}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#scope LbListener#scope}.

---

##### `sessionCookieName`<sup>Optional</sup> <a name="sessionCookieName" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.sessionCookieName"></a>

```java
public java.lang.String getSessionCookieName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#session_cookie_name LbListener#session_cookie_name}.

---

##### `sessionTimeout`<sup>Optional</sup> <a name="sessionTimeout" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc.property.sessionTimeout"></a>

```java
public java.lang.Number getSessionTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#session_timeout LbListener#session_timeout}.

---

### LbListenerDefaultActionFixedResponse <a name="LbListenerDefaultActionFixedResponse" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponse"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponse.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lb_listener.LbListenerDefaultActionFixedResponse;

LbListenerDefaultActionFixedResponse.builder()
    .contentType(java.lang.String)
//  .messageBody(java.lang.String)
//  .statusCode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponse.property.contentType">contentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#content_type LbListener#content_type}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponse.property.messageBody">messageBody</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#message_body LbListener#message_body}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponse.property.statusCode">statusCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#status_code LbListener#status_code}. |

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponse.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#content_type LbListener#content_type}.

---

##### `messageBody`<sup>Optional</sup> <a name="messageBody" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponse.property.messageBody"></a>

```java
public java.lang.String getMessageBody();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#message_body LbListener#message_body}.

---

##### `statusCode`<sup>Optional</sup> <a name="statusCode" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponse.property.statusCode"></a>

```java
public java.lang.String getStatusCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#status_code LbListener#status_code}.

---

### LbListenerDefaultActionForward <a name="LbListenerDefaultActionForward" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForward"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForward.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lb_listener.LbListenerDefaultActionForward;

LbListenerDefaultActionForward.builder()
    .targetGroup(IResolvable)
    .targetGroup(java.util.List<LbListenerDefaultActionForwardTargetGroup>)
//  .stickiness(LbListenerDefaultActionForwardStickiness)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForward.property.targetGroup">targetGroup</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroup">LbListenerDefaultActionForwardTargetGroup</a>></code> | target_group block. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForward.property.stickiness">stickiness</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickiness">LbListenerDefaultActionForwardStickiness</a></code> | stickiness block. |

---

##### `targetGroup`<sup>Required</sup> <a name="targetGroup" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForward.property.targetGroup"></a>

```java
public java.lang.Object getTargetGroup();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroup">LbListenerDefaultActionForwardTargetGroup</a>>

target_group block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#target_group LbListener#target_group}

---

##### `stickiness`<sup>Optional</sup> <a name="stickiness" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForward.property.stickiness"></a>

```java
public LbListenerDefaultActionForwardStickiness getStickiness();
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickiness">LbListenerDefaultActionForwardStickiness</a>

stickiness block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#stickiness LbListener#stickiness}

---

### LbListenerDefaultActionForwardStickiness <a name="LbListenerDefaultActionForwardStickiness" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickiness"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickiness.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lb_listener.LbListenerDefaultActionForwardStickiness;

LbListenerDefaultActionForwardStickiness.builder()
    .duration(java.lang.Number)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickiness.property.duration">duration</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#duration LbListener#duration}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickiness.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#enabled LbListener#enabled}. |

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickiness.property.duration"></a>

```java
public java.lang.Number getDuration();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#duration LbListener#duration}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickiness.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#enabled LbListener#enabled}.

---

### LbListenerDefaultActionForwardTargetGroup <a name="LbListenerDefaultActionForwardTargetGroup" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lb_listener.LbListenerDefaultActionForwardTargetGroup;

LbListenerDefaultActionForwardTargetGroup.builder()
    .arn(java.lang.String)
//  .weight(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroup.property.arn">arn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#arn LbListener#arn}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroup.property.weight">weight</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#weight LbListener#weight}. |

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroup.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#arn LbListener#arn}.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroup.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#weight LbListener#weight}.

---

### LbListenerDefaultActionRedirect <a name="LbListenerDefaultActionRedirect" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lb_listener.LbListenerDefaultActionRedirect;

LbListenerDefaultActionRedirect.builder()
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
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect.property.statusCode">statusCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#status_code LbListener#status_code}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect.property.host">host</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#host LbListener#host}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#path LbListener#path}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect.property.port">port</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#port LbListener#port}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#protocol LbListener#protocol}. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect.property.query">query</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#query LbListener#query}. |

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect.property.statusCode"></a>

```java
public java.lang.String getStatusCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#status_code LbListener#status_code}.

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#host LbListener#host}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#path LbListener#path}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect.property.port"></a>

```java
public java.lang.String getPort();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#port LbListener#port}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#protocol LbListener#protocol}.

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#query LbListener#query}.

---

### LbListenerTimeouts <a name="LbListenerTimeouts" id="@cdktf/provider-aws.lbListener.LbListenerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lbListener.LbListenerTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lb_listener.LbListenerTimeouts;

LbListenerTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#read LbListener#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-aws.lbListener.LbListenerTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener#read LbListener#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### LbListenerDefaultActionAuthenticateCognitoOutputReference <a name="LbListenerDefaultActionAuthenticateCognitoOutputReference" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lb_listener.LbListenerDefaultActionAuthenticateCognitoOutputReference;

new LbListenerDefaultActionAuthenticateCognitoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.resetAuthenticationRequestExtraParams">resetAuthenticationRequestExtraParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.resetOnUnauthenticatedRequest">resetOnUnauthenticatedRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.resetSessionCookieName">resetSessionCookieName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.resetSessionTimeout">resetSessionTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthenticationRequestExtraParams` <a name="resetAuthenticationRequestExtraParams" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.resetAuthenticationRequestExtraParams"></a>

```java
public void resetAuthenticationRequestExtraParams()
```

##### `resetOnUnauthenticatedRequest` <a name="resetOnUnauthenticatedRequest" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.resetOnUnauthenticatedRequest"></a>

```java
public void resetOnUnauthenticatedRequest()
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.resetScope"></a>

```java
public void resetScope()
```

##### `resetSessionCookieName` <a name="resetSessionCookieName" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.resetSessionCookieName"></a>

```java
public void resetSessionCookieName()
```

##### `resetSessionTimeout` <a name="resetSessionTimeout" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.resetSessionTimeout"></a>

```java
public void resetSessionTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.authenticationRequestExtraParamsInput">authenticationRequestExtraParamsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.onUnauthenticatedRequestInput">onUnauthenticatedRequestInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.sessionCookieNameInput">sessionCookieNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.sessionTimeoutInput">sessionTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolArnInput">userPoolArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolClientIdInput">userPoolClientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolDomainInput">userPoolDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.authenticationRequestExtraParams">authenticationRequestExtraParams</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.onUnauthenticatedRequest">onUnauthenticatedRequest</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.sessionCookieName">sessionCookieName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.sessionTimeout">sessionTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolArn">userPoolArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolClientId">userPoolClientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolDomain">userPoolDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito">LbListenerDefaultActionAuthenticateCognito</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authenticationRequestExtraParamsInput`<sup>Optional</sup> <a name="authenticationRequestExtraParamsInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.authenticationRequestExtraParamsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAuthenticationRequestExtraParamsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `onUnauthenticatedRequestInput`<sup>Optional</sup> <a name="onUnauthenticatedRequestInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.onUnauthenticatedRequestInput"></a>

```java
public java.lang.String getOnUnauthenticatedRequestInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `sessionCookieNameInput`<sup>Optional</sup> <a name="sessionCookieNameInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.sessionCookieNameInput"></a>

```java
public java.lang.String getSessionCookieNameInput();
```

- *Type:* java.lang.String

---

##### `sessionTimeoutInput`<sup>Optional</sup> <a name="sessionTimeoutInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.sessionTimeoutInput"></a>

```java
public java.lang.Number getSessionTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `userPoolArnInput`<sup>Optional</sup> <a name="userPoolArnInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolArnInput"></a>

```java
public java.lang.String getUserPoolArnInput();
```

- *Type:* java.lang.String

---

##### `userPoolClientIdInput`<sup>Optional</sup> <a name="userPoolClientIdInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolClientIdInput"></a>

```java
public java.lang.String getUserPoolClientIdInput();
```

- *Type:* java.lang.String

---

##### `userPoolDomainInput`<sup>Optional</sup> <a name="userPoolDomainInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolDomainInput"></a>

```java
public java.lang.String getUserPoolDomainInput();
```

- *Type:* java.lang.String

---

##### `authenticationRequestExtraParams`<sup>Required</sup> <a name="authenticationRequestExtraParams" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.authenticationRequestExtraParams"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAuthenticationRequestExtraParams();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `onUnauthenticatedRequest`<sup>Required</sup> <a name="onUnauthenticatedRequest" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.onUnauthenticatedRequest"></a>

```java
public java.lang.String getOnUnauthenticatedRequest();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `sessionCookieName`<sup>Required</sup> <a name="sessionCookieName" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.sessionCookieName"></a>

```java
public java.lang.String getSessionCookieName();
```

- *Type:* java.lang.String

---

##### `sessionTimeout`<sup>Required</sup> <a name="sessionTimeout" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.sessionTimeout"></a>

```java
public java.lang.Number getSessionTimeout();
```

- *Type:* java.lang.Number

---

##### `userPoolArn`<sup>Required</sup> <a name="userPoolArn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolArn"></a>

```java
public java.lang.String getUserPoolArn();
```

- *Type:* java.lang.String

---

##### `userPoolClientId`<sup>Required</sup> <a name="userPoolClientId" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolClientId"></a>

```java
public java.lang.String getUserPoolClientId();
```

- *Type:* java.lang.String

---

##### `userPoolDomain`<sup>Required</sup> <a name="userPoolDomain" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.userPoolDomain"></a>

```java
public java.lang.String getUserPoolDomain();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference.property.internalValue"></a>

```java
public LbListenerDefaultActionAuthenticateCognito getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito">LbListenerDefaultActionAuthenticateCognito</a>

---


### LbListenerDefaultActionAuthenticateOidcOutputReference <a name="LbListenerDefaultActionAuthenticateOidcOutputReference" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lb_listener.LbListenerDefaultActionAuthenticateOidcOutputReference;

new LbListenerDefaultActionAuthenticateOidcOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.resetAuthenticationRequestExtraParams">resetAuthenticationRequestExtraParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.resetOnUnauthenticatedRequest">resetOnUnauthenticatedRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.resetSessionCookieName">resetSessionCookieName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.resetSessionTimeout">resetSessionTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthenticationRequestExtraParams` <a name="resetAuthenticationRequestExtraParams" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.resetAuthenticationRequestExtraParams"></a>

```java
public void resetAuthenticationRequestExtraParams()
```

##### `resetOnUnauthenticatedRequest` <a name="resetOnUnauthenticatedRequest" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.resetOnUnauthenticatedRequest"></a>

```java
public void resetOnUnauthenticatedRequest()
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.resetScope"></a>

```java
public void resetScope()
```

##### `resetSessionCookieName` <a name="resetSessionCookieName" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.resetSessionCookieName"></a>

```java
public void resetSessionCookieName()
```

##### `resetSessionTimeout` <a name="resetSessionTimeout" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.resetSessionTimeout"></a>

```java
public void resetSessionTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.authenticationRequestExtraParamsInput">authenticationRequestExtraParamsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.authorizationEndpointInput">authorizationEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.issuerInput">issuerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.onUnauthenticatedRequestInput">onUnauthenticatedRequestInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.sessionCookieNameInput">sessionCookieNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.sessionTimeoutInput">sessionTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.tokenEndpointInput">tokenEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.userInfoEndpointInput">userInfoEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.authenticationRequestExtraParams">authenticationRequestExtraParams</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.authorizationEndpoint">authorizationEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.issuer">issuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.onUnauthenticatedRequest">onUnauthenticatedRequest</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.sessionCookieName">sessionCookieName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.sessionTimeout">sessionTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.tokenEndpoint">tokenEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.userInfoEndpoint">userInfoEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc">LbListenerDefaultActionAuthenticateOidc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authenticationRequestExtraParamsInput`<sup>Optional</sup> <a name="authenticationRequestExtraParamsInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.authenticationRequestExtraParamsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAuthenticationRequestExtraParamsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `authorizationEndpointInput`<sup>Optional</sup> <a name="authorizationEndpointInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.authorizationEndpointInput"></a>

```java
public java.lang.String getAuthorizationEndpointInput();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.issuerInput"></a>

```java
public java.lang.String getIssuerInput();
```

- *Type:* java.lang.String

---

##### `onUnauthenticatedRequestInput`<sup>Optional</sup> <a name="onUnauthenticatedRequestInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.onUnauthenticatedRequestInput"></a>

```java
public java.lang.String getOnUnauthenticatedRequestInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `sessionCookieNameInput`<sup>Optional</sup> <a name="sessionCookieNameInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.sessionCookieNameInput"></a>

```java
public java.lang.String getSessionCookieNameInput();
```

- *Type:* java.lang.String

---

##### `sessionTimeoutInput`<sup>Optional</sup> <a name="sessionTimeoutInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.sessionTimeoutInput"></a>

```java
public java.lang.Number getSessionTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `tokenEndpointInput`<sup>Optional</sup> <a name="tokenEndpointInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.tokenEndpointInput"></a>

```java
public java.lang.String getTokenEndpointInput();
```

- *Type:* java.lang.String

---

##### `userInfoEndpointInput`<sup>Optional</sup> <a name="userInfoEndpointInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.userInfoEndpointInput"></a>

```java
public java.lang.String getUserInfoEndpointInput();
```

- *Type:* java.lang.String

---

##### `authenticationRequestExtraParams`<sup>Required</sup> <a name="authenticationRequestExtraParams" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.authenticationRequestExtraParams"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAuthenticationRequestExtraParams();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `authorizationEndpoint`<sup>Required</sup> <a name="authorizationEndpoint" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.authorizationEndpoint"></a>

```java
public java.lang.String getAuthorizationEndpoint();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

---

##### `onUnauthenticatedRequest`<sup>Required</sup> <a name="onUnauthenticatedRequest" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.onUnauthenticatedRequest"></a>

```java
public java.lang.String getOnUnauthenticatedRequest();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `sessionCookieName`<sup>Required</sup> <a name="sessionCookieName" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.sessionCookieName"></a>

```java
public java.lang.String getSessionCookieName();
```

- *Type:* java.lang.String

---

##### `sessionTimeout`<sup>Required</sup> <a name="sessionTimeout" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.sessionTimeout"></a>

```java
public java.lang.Number getSessionTimeout();
```

- *Type:* java.lang.Number

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.tokenEndpoint"></a>

```java
public java.lang.String getTokenEndpoint();
```

- *Type:* java.lang.String

---

##### `userInfoEndpoint`<sup>Required</sup> <a name="userInfoEndpoint" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.userInfoEndpoint"></a>

```java
public java.lang.String getUserInfoEndpoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference.property.internalValue"></a>

```java
public LbListenerDefaultActionAuthenticateOidc getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc">LbListenerDefaultActionAuthenticateOidc</a>

---


### LbListenerDefaultActionFixedResponseOutputReference <a name="LbListenerDefaultActionFixedResponseOutputReference" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lb_listener.LbListenerDefaultActionFixedResponseOutputReference;

new LbListenerDefaultActionFixedResponseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.resetMessageBody">resetMessageBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.resetStatusCode">resetStatusCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMessageBody` <a name="resetMessageBody" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.resetMessageBody"></a>

```java
public void resetMessageBody()
```

##### `resetStatusCode` <a name="resetStatusCode" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.resetStatusCode"></a>

```java
public void resetStatusCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.property.messageBodyInput">messageBodyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.property.statusCodeInput">statusCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.property.contentType">contentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.property.messageBody">messageBody</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.property.statusCode">statusCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponse">LbListenerDefaultActionFixedResponse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.property.contentTypeInput"></a>

```java
public java.lang.String getContentTypeInput();
```

- *Type:* java.lang.String

---

##### `messageBodyInput`<sup>Optional</sup> <a name="messageBodyInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.property.messageBodyInput"></a>

```java
public java.lang.String getMessageBodyInput();
```

- *Type:* java.lang.String

---

##### `statusCodeInput`<sup>Optional</sup> <a name="statusCodeInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.property.statusCodeInput"></a>

```java
public java.lang.String getStatusCodeInput();
```

- *Type:* java.lang.String

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

---

##### `messageBody`<sup>Required</sup> <a name="messageBody" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.property.messageBody"></a>

```java
public java.lang.String getMessageBody();
```

- *Type:* java.lang.String

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.property.statusCode"></a>

```java
public java.lang.String getStatusCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference.property.internalValue"></a>

```java
public LbListenerDefaultActionFixedResponse getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponse">LbListenerDefaultActionFixedResponse</a>

---


### LbListenerDefaultActionForwardOutputReference <a name="LbListenerDefaultActionForwardOutputReference" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lb_listener.LbListenerDefaultActionForwardOutputReference;

new LbListenerDefaultActionForwardOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.putStickiness">putStickiness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.putTargetGroup">putTargetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.resetStickiness">resetStickiness</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putStickiness` <a name="putStickiness" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.putStickiness"></a>

```java
public void putStickiness(LbListenerDefaultActionForwardStickiness value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.putStickiness.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickiness">LbListenerDefaultActionForwardStickiness</a>

---

##### `putTargetGroup` <a name="putTargetGroup" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.putTargetGroup"></a>

```java
public void putTargetGroup(IResolvable OR java.util.List<LbListenerDefaultActionForwardTargetGroup> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.putTargetGroup.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroup">LbListenerDefaultActionForwardTargetGroup</a>>

---

##### `resetStickiness` <a name="resetStickiness" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.resetStickiness"></a>

```java
public void resetStickiness()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.property.stickiness">stickiness</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference">LbListenerDefaultActionForwardStickinessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.property.targetGroup">targetGroup</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList">LbListenerDefaultActionForwardTargetGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.property.stickinessInput">stickinessInput</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickiness">LbListenerDefaultActionForwardStickiness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.property.targetGroupInput">targetGroupInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroup">LbListenerDefaultActionForwardTargetGroup</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForward">LbListenerDefaultActionForward</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `stickiness`<sup>Required</sup> <a name="stickiness" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.property.stickiness"></a>

```java
public LbListenerDefaultActionForwardStickinessOutputReference getStickiness();
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference">LbListenerDefaultActionForwardStickinessOutputReference</a>

---

##### `targetGroup`<sup>Required</sup> <a name="targetGroup" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.property.targetGroup"></a>

```java
public LbListenerDefaultActionForwardTargetGroupList getTargetGroup();
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList">LbListenerDefaultActionForwardTargetGroupList</a>

---

##### `stickinessInput`<sup>Optional</sup> <a name="stickinessInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.property.stickinessInput"></a>

```java
public LbListenerDefaultActionForwardStickiness getStickinessInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickiness">LbListenerDefaultActionForwardStickiness</a>

---

##### `targetGroupInput`<sup>Optional</sup> <a name="targetGroupInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.property.targetGroupInput"></a>

```java
public java.lang.Object getTargetGroupInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroup">LbListenerDefaultActionForwardTargetGroup</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference.property.internalValue"></a>

```java
public LbListenerDefaultActionForward getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForward">LbListenerDefaultActionForward</a>

---


### LbListenerDefaultActionForwardStickinessOutputReference <a name="LbListenerDefaultActionForwardStickinessOutputReference" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lb_listener.LbListenerDefaultActionForwardStickinessOutputReference;

new LbListenerDefaultActionForwardStickinessOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.property.durationInput">durationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.property.duration">duration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickiness">LbListenerDefaultActionForwardStickiness</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.property.durationInput"></a>

```java
public java.lang.Number getDurationInput();
```

- *Type:* java.lang.Number

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.property.duration"></a>

```java
public java.lang.Number getDuration();
```

- *Type:* java.lang.Number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickinessOutputReference.property.internalValue"></a>

```java
public LbListenerDefaultActionForwardStickiness getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardStickiness">LbListenerDefaultActionForwardStickiness</a>

---


### LbListenerDefaultActionForwardTargetGroupList <a name="LbListenerDefaultActionForwardTargetGroupList" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lb_listener.LbListenerDefaultActionForwardTargetGroupList;

new LbListenerDefaultActionForwardTargetGroupList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.get"></a>

```java
public LbListenerDefaultActionForwardTargetGroupOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroup">LbListenerDefaultActionForwardTargetGroup</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroup">LbListenerDefaultActionForwardTargetGroup</a>>

---


### LbListenerDefaultActionForwardTargetGroupOutputReference <a name="LbListenerDefaultActionForwardTargetGroupOutputReference" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lb_listener.LbListenerDefaultActionForwardTargetGroupOutputReference;

new LbListenerDefaultActionForwardTargetGroupOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWeight` <a name="resetWeight" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.resetWeight"></a>

```java
public void resetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.property.arnInput">arnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.property.weightInput">weightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroup">LbListenerDefaultActionForwardTargetGroup</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.property.arnInput"></a>

```java
public java.lang.String getArnInput();
```

- *Type:* java.lang.String

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.property.weightInput"></a>

```java
public java.lang.Number getWeightInput();
```

- *Type:* java.lang.Number

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroupOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardTargetGroup">LbListenerDefaultActionForwardTargetGroup</a> OR com.hashicorp.cdktf.IResolvable

---


### LbListenerDefaultActionList <a name="LbListenerDefaultActionList" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lb_listener.LbListenerDefaultActionList;

new LbListenerDefaultActionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.get"></a>

```java
public LbListenerDefaultActionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultAction">LbListenerDefaultAction</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultAction">LbListenerDefaultAction</a>>

---


### LbListenerDefaultActionOutputReference <a name="LbListenerDefaultActionOutputReference" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lb_listener.LbListenerDefaultActionOutputReference;

new LbListenerDefaultActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.putAuthenticateCognito">putAuthenticateCognito</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.putAuthenticateOidc">putAuthenticateOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.putFixedResponse">putFixedResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.putForward">putForward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.putRedirect">putRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.resetAuthenticateCognito">resetAuthenticateCognito</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.resetAuthenticateOidc">resetAuthenticateOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.resetFixedResponse">resetFixedResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.resetForward">resetForward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.resetRedirect">resetRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.resetTargetGroupArn">resetTargetGroupArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthenticateCognito` <a name="putAuthenticateCognito" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.putAuthenticateCognito"></a>

```java
public void putAuthenticateCognito(LbListenerDefaultActionAuthenticateCognito value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.putAuthenticateCognito.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito">LbListenerDefaultActionAuthenticateCognito</a>

---

##### `putAuthenticateOidc` <a name="putAuthenticateOidc" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.putAuthenticateOidc"></a>

```java
public void putAuthenticateOidc(LbListenerDefaultActionAuthenticateOidc value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.putAuthenticateOidc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc">LbListenerDefaultActionAuthenticateOidc</a>

---

##### `putFixedResponse` <a name="putFixedResponse" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.putFixedResponse"></a>

```java
public void putFixedResponse(LbListenerDefaultActionFixedResponse value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.putFixedResponse.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponse">LbListenerDefaultActionFixedResponse</a>

---

##### `putForward` <a name="putForward" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.putForward"></a>

```java
public void putForward(LbListenerDefaultActionForward value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.putForward.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForward">LbListenerDefaultActionForward</a>

---

##### `putRedirect` <a name="putRedirect" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.putRedirect"></a>

```java
public void putRedirect(LbListenerDefaultActionRedirect value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.putRedirect.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect">LbListenerDefaultActionRedirect</a>

---

##### `resetAuthenticateCognito` <a name="resetAuthenticateCognito" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.resetAuthenticateCognito"></a>

```java
public void resetAuthenticateCognito()
```

##### `resetAuthenticateOidc` <a name="resetAuthenticateOidc" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.resetAuthenticateOidc"></a>

```java
public void resetAuthenticateOidc()
```

##### `resetFixedResponse` <a name="resetFixedResponse" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.resetFixedResponse"></a>

```java
public void resetFixedResponse()
```

##### `resetForward` <a name="resetForward" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.resetForward"></a>

```java
public void resetForward()
```

##### `resetOrder` <a name="resetOrder" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.resetOrder"></a>

```java
public void resetOrder()
```

##### `resetRedirect` <a name="resetRedirect" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.resetRedirect"></a>

```java
public void resetRedirect()
```

##### `resetTargetGroupArn` <a name="resetTargetGroupArn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.resetTargetGroupArn"></a>

```java
public void resetTargetGroupArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.authenticateCognito">authenticateCognito</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference">LbListenerDefaultActionAuthenticateCognitoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.authenticateOidc">authenticateOidc</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference">LbListenerDefaultActionAuthenticateOidcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.fixedResponse">fixedResponse</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference">LbListenerDefaultActionFixedResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.forward">forward</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference">LbListenerDefaultActionForwardOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.redirect">redirect</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference">LbListenerDefaultActionRedirectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.authenticateCognitoInput">authenticateCognitoInput</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito">LbListenerDefaultActionAuthenticateCognito</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.authenticateOidcInput">authenticateOidcInput</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc">LbListenerDefaultActionAuthenticateOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.fixedResponseInput">fixedResponseInput</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponse">LbListenerDefaultActionFixedResponse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.forwardInput">forwardInput</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForward">LbListenerDefaultActionForward</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.orderInput">orderInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.redirectInput">redirectInput</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect">LbListenerDefaultActionRedirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.targetGroupArnInput">targetGroupArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.order">order</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.targetGroupArn">targetGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultAction">LbListenerDefaultAction</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authenticateCognito`<sup>Required</sup> <a name="authenticateCognito" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.authenticateCognito"></a>

```java
public LbListenerDefaultActionAuthenticateCognitoOutputReference getAuthenticateCognito();
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognitoOutputReference">LbListenerDefaultActionAuthenticateCognitoOutputReference</a>

---

##### `authenticateOidc`<sup>Required</sup> <a name="authenticateOidc" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.authenticateOidc"></a>

```java
public LbListenerDefaultActionAuthenticateOidcOutputReference getAuthenticateOidc();
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidcOutputReference">LbListenerDefaultActionAuthenticateOidcOutputReference</a>

---

##### `fixedResponse`<sup>Required</sup> <a name="fixedResponse" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.fixedResponse"></a>

```java
public LbListenerDefaultActionFixedResponseOutputReference getFixedResponse();
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponseOutputReference">LbListenerDefaultActionFixedResponseOutputReference</a>

---

##### `forward`<sup>Required</sup> <a name="forward" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.forward"></a>

```java
public LbListenerDefaultActionForwardOutputReference getForward();
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForwardOutputReference">LbListenerDefaultActionForwardOutputReference</a>

---

##### `redirect`<sup>Required</sup> <a name="redirect" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.redirect"></a>

```java
public LbListenerDefaultActionRedirectOutputReference getRedirect();
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference">LbListenerDefaultActionRedirectOutputReference</a>

---

##### `authenticateCognitoInput`<sup>Optional</sup> <a name="authenticateCognitoInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.authenticateCognitoInput"></a>

```java
public LbListenerDefaultActionAuthenticateCognito getAuthenticateCognitoInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateCognito">LbListenerDefaultActionAuthenticateCognito</a>

---

##### `authenticateOidcInput`<sup>Optional</sup> <a name="authenticateOidcInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.authenticateOidcInput"></a>

```java
public LbListenerDefaultActionAuthenticateOidc getAuthenticateOidcInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionAuthenticateOidc">LbListenerDefaultActionAuthenticateOidc</a>

---

##### `fixedResponseInput`<sup>Optional</sup> <a name="fixedResponseInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.fixedResponseInput"></a>

```java
public LbListenerDefaultActionFixedResponse getFixedResponseInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionFixedResponse">LbListenerDefaultActionFixedResponse</a>

---

##### `forwardInput`<sup>Optional</sup> <a name="forwardInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.forwardInput"></a>

```java
public LbListenerDefaultActionForward getForwardInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionForward">LbListenerDefaultActionForward</a>

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.orderInput"></a>

```java
public java.lang.Number getOrderInput();
```

- *Type:* java.lang.Number

---

##### `redirectInput`<sup>Optional</sup> <a name="redirectInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.redirectInput"></a>

```java
public LbListenerDefaultActionRedirect getRedirectInput();
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect">LbListenerDefaultActionRedirect</a>

---

##### `targetGroupArnInput`<sup>Optional</sup> <a name="targetGroupArnInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.targetGroupArnInput"></a>

```java
public java.lang.String getTargetGroupArnInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.order"></a>

```java
public java.lang.Number getOrder();
```

- *Type:* java.lang.Number

---

##### `targetGroupArn`<sup>Required</sup> <a name="targetGroupArn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.targetGroupArn"></a>

```java
public java.lang.String getTargetGroupArn();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultAction">LbListenerDefaultAction</a> OR com.hashicorp.cdktf.IResolvable

---


### LbListenerDefaultActionRedirectOutputReference <a name="LbListenerDefaultActionRedirectOutputReference" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lb_listener.LbListenerDefaultActionRedirectOutputReference;

new LbListenerDefaultActionRedirectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.resetQuery">resetQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHost` <a name="resetHost" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.resetHost"></a>

```java
public void resetHost()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetQuery` <a name="resetQuery" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.resetQuery"></a>

```java
public void resetQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.portInput">portInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.queryInput">queryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.statusCodeInput">statusCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.port">port</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.statusCode">statusCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect">LbListenerDefaultActionRedirect</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.portInput"></a>

```java
public java.lang.String getPortInput();
```

- *Type:* java.lang.String

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.queryInput"></a>

```java
public java.lang.String getQueryInput();
```

- *Type:* java.lang.String

---

##### `statusCodeInput`<sup>Optional</sup> <a name="statusCodeInput" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.statusCodeInput"></a>

```java
public java.lang.String getStatusCodeInput();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.port"></a>

```java
public java.lang.String getPort();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.statusCode"></a>

```java
public java.lang.String getStatusCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirectOutputReference.property.internalValue"></a>

```java
public LbListenerDefaultActionRedirect getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerDefaultActionRedirect">LbListenerDefaultActionRedirect</a>

---


### LbListenerTimeoutsOutputReference <a name="LbListenerTimeoutsOutputReference" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.lb_listener.LbListenerTimeoutsOutputReference;

new LbListenerTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.lbListener.LbListenerTimeouts">LbListenerTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lbListener.LbListenerTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.lbListener.LbListenerTimeouts">LbListenerTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



