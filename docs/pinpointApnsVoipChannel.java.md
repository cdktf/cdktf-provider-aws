# `pinpointApnsVoipChannel` Submodule <a name="`pinpointApnsVoipChannel` Submodule" id="@cdktf/provider-aws.pinpointApnsVoipChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PinpointApnsVoipChannel <a name="PinpointApnsVoipChannel" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel aws_pinpoint_apns_voip_channel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.pinpoint_apns_voip_channel.PinpointApnsVoipChannel;

PinpointApnsVoipChannel.Builder.create(Construct scope, java.lang.String id)
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
    .applicationId(java.lang.String)
//  .bundleId(java.lang.String)
//  .certificate(java.lang.String)
//  .defaultAuthenticationMethod(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .privateKey(java.lang.String)
//  .teamId(java.lang.String)
//  .tokenKey(java.lang.String)
//  .tokenKeyId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.Initializer.parameter.applicationId">applicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#application_id PinpointApnsVoipChannel#application_id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.Initializer.parameter.bundleId">bundleId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#bundle_id PinpointApnsVoipChannel#bundle_id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.Initializer.parameter.certificate">certificate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#certificate PinpointApnsVoipChannel#certificate}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.Initializer.parameter.defaultAuthenticationMethod">defaultAuthenticationMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#default_authentication_method PinpointApnsVoipChannel#default_authentication_method}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#enabled PinpointApnsVoipChannel#enabled}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#id PinpointApnsVoipChannel#id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.Initializer.parameter.privateKey">privateKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#private_key PinpointApnsVoipChannel#private_key}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.Initializer.parameter.teamId">teamId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#team_id PinpointApnsVoipChannel#team_id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.Initializer.parameter.tokenKey">tokenKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#token_key PinpointApnsVoipChannel#token_key}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.Initializer.parameter.tokenKeyId">tokenKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#token_key_id PinpointApnsVoipChannel#token_key_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.Initializer.parameter.applicationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#application_id PinpointApnsVoipChannel#application_id}.

---

##### `bundleId`<sup>Optional</sup> <a name="bundleId" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.Initializer.parameter.bundleId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#bundle_id PinpointApnsVoipChannel#bundle_id}.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.Initializer.parameter.certificate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#certificate PinpointApnsVoipChannel#certificate}.

---

##### `defaultAuthenticationMethod`<sup>Optional</sup> <a name="defaultAuthenticationMethod" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.Initializer.parameter.defaultAuthenticationMethod"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#default_authentication_method PinpointApnsVoipChannel#default_authentication_method}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#enabled PinpointApnsVoipChannel#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#id PinpointApnsVoipChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.Initializer.parameter.privateKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#private_key PinpointApnsVoipChannel#private_key}.

---

##### `teamId`<sup>Optional</sup> <a name="teamId" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.Initializer.parameter.teamId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#team_id PinpointApnsVoipChannel#team_id}.

---

##### `tokenKey`<sup>Optional</sup> <a name="tokenKey" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.Initializer.parameter.tokenKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#token_key PinpointApnsVoipChannel#token_key}.

---

##### `tokenKeyId`<sup>Optional</sup> <a name="tokenKeyId" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.Initializer.parameter.tokenKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#token_key_id PinpointApnsVoipChannel#token_key_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetBundleId">resetBundleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetDefaultAuthenticationMethod">resetDefaultAuthenticationMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetPrivateKey">resetPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetTeamId">resetTeamId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetTokenKey">resetTokenKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetTokenKeyId">resetTokenKeyId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetBundleId` <a name="resetBundleId" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetBundleId"></a>

```java
public void resetBundleId()
```

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetCertificate"></a>

```java
public void resetCertificate()
```

##### `resetDefaultAuthenticationMethod` <a name="resetDefaultAuthenticationMethod" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetDefaultAuthenticationMethod"></a>

```java
public void resetDefaultAuthenticationMethod()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetId"></a>

```java
public void resetId()
```

##### `resetPrivateKey` <a name="resetPrivateKey" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetPrivateKey"></a>

```java
public void resetPrivateKey()
```

##### `resetTeamId` <a name="resetTeamId" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetTeamId"></a>

```java
public void resetTeamId()
```

##### `resetTokenKey` <a name="resetTokenKey" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetTokenKey"></a>

```java
public void resetTokenKey()
```

##### `resetTokenKeyId` <a name="resetTokenKeyId" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.resetTokenKeyId"></a>

```java
public void resetTokenKeyId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.pinpoint_apns_voip_channel.PinpointApnsVoipChannel;

PinpointApnsVoipChannel.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.pinpoint_apns_voip_channel.PinpointApnsVoipChannel;

PinpointApnsVoipChannel.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.pinpoint_apns_voip_channel.PinpointApnsVoipChannel;

PinpointApnsVoipChannel.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.applicationIdInput">applicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.bundleIdInput">bundleIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.certificateInput">certificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.defaultAuthenticationMethodInput">defaultAuthenticationMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.privateKeyInput">privateKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.teamIdInput">teamIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.tokenKeyIdInput">tokenKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.tokenKeyInput">tokenKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.bundleId">bundleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.certificate">certificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.defaultAuthenticationMethod">defaultAuthenticationMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.teamId">teamId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.tokenKey">tokenKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.tokenKeyId">tokenKeyId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.applicationIdInput"></a>

```java
public java.lang.String getApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `bundleIdInput`<sup>Optional</sup> <a name="bundleIdInput" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.bundleIdInput"></a>

```java
public java.lang.String getBundleIdInput();
```

- *Type:* java.lang.String

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.certificateInput"></a>

```java
public java.lang.String getCertificateInput();
```

- *Type:* java.lang.String

---

##### `defaultAuthenticationMethodInput`<sup>Optional</sup> <a name="defaultAuthenticationMethodInput" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.defaultAuthenticationMethodInput"></a>

```java
public java.lang.String getDefaultAuthenticationMethodInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.privateKeyInput"></a>

```java
public java.lang.String getPrivateKeyInput();
```

- *Type:* java.lang.String

---

##### `teamIdInput`<sup>Optional</sup> <a name="teamIdInput" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.teamIdInput"></a>

```java
public java.lang.String getTeamIdInput();
```

- *Type:* java.lang.String

---

##### `tokenKeyIdInput`<sup>Optional</sup> <a name="tokenKeyIdInput" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.tokenKeyIdInput"></a>

```java
public java.lang.String getTokenKeyIdInput();
```

- *Type:* java.lang.String

---

##### `tokenKeyInput`<sup>Optional</sup> <a name="tokenKeyInput" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.tokenKeyInput"></a>

```java
public java.lang.String getTokenKeyInput();
```

- *Type:* java.lang.String

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `bundleId`<sup>Required</sup> <a name="bundleId" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.bundleId"></a>

```java
public java.lang.String getBundleId();
```

- *Type:* java.lang.String

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

---

##### `defaultAuthenticationMethod`<sup>Required</sup> <a name="defaultAuthenticationMethod" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.defaultAuthenticationMethod"></a>

```java
public java.lang.String getDefaultAuthenticationMethod();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.teamId"></a>

```java
public java.lang.String getTeamId();
```

- *Type:* java.lang.String

---

##### `tokenKey`<sup>Required</sup> <a name="tokenKey" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.tokenKey"></a>

```java
public java.lang.String getTokenKey();
```

- *Type:* java.lang.String

---

##### `tokenKeyId`<sup>Required</sup> <a name="tokenKeyId" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.tokenKeyId"></a>

```java
public java.lang.String getTokenKeyId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannel.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PinpointApnsVoipChannelConfig <a name="PinpointApnsVoipChannelConfig" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.pinpoint_apns_voip_channel.PinpointApnsVoipChannelConfig;

PinpointApnsVoipChannelConfig.builder()
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
    .applicationId(java.lang.String)
//  .bundleId(java.lang.String)
//  .certificate(java.lang.String)
//  .defaultAuthenticationMethod(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .privateKey(java.lang.String)
//  .teamId(java.lang.String)
//  .tokenKey(java.lang.String)
//  .tokenKeyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#application_id PinpointApnsVoipChannel#application_id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.bundleId">bundleId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#bundle_id PinpointApnsVoipChannel#bundle_id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.certificate">certificate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#certificate PinpointApnsVoipChannel#certificate}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.defaultAuthenticationMethod">defaultAuthenticationMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#default_authentication_method PinpointApnsVoipChannel#default_authentication_method}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#enabled PinpointApnsVoipChannel#enabled}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#id PinpointApnsVoipChannel#id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#private_key PinpointApnsVoipChannel#private_key}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.teamId">teamId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#team_id PinpointApnsVoipChannel#team_id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.tokenKey">tokenKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#token_key PinpointApnsVoipChannel#token_key}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.tokenKeyId">tokenKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#token_key_id PinpointApnsVoipChannel#token_key_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#application_id PinpointApnsVoipChannel#application_id}.

---

##### `bundleId`<sup>Optional</sup> <a name="bundleId" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.bundleId"></a>

```java
public java.lang.String getBundleId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#bundle_id PinpointApnsVoipChannel#bundle_id}.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#certificate PinpointApnsVoipChannel#certificate}.

---

##### `defaultAuthenticationMethod`<sup>Optional</sup> <a name="defaultAuthenticationMethod" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.defaultAuthenticationMethod"></a>

```java
public java.lang.String getDefaultAuthenticationMethod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#default_authentication_method PinpointApnsVoipChannel#default_authentication_method}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#enabled PinpointApnsVoipChannel#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#id PinpointApnsVoipChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#private_key PinpointApnsVoipChannel#private_key}.

---

##### `teamId`<sup>Optional</sup> <a name="teamId" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.teamId"></a>

```java
public java.lang.String getTeamId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#team_id PinpointApnsVoipChannel#team_id}.

---

##### `tokenKey`<sup>Optional</sup> <a name="tokenKey" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.tokenKey"></a>

```java
public java.lang.String getTokenKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#token_key PinpointApnsVoipChannel#token_key}.

---

##### `tokenKeyId`<sup>Optional</sup> <a name="tokenKeyId" id="@cdktf/provider-aws.pinpointApnsVoipChannel.PinpointApnsVoipChannelConfig.property.tokenKeyId"></a>

```java
public java.lang.String getTokenKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_channel#token_key_id PinpointApnsVoipChannel#token_key_id}.

---



