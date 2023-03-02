# `pinpointApnsVoipSandboxChannel` Submodule <a name="`pinpointApnsVoipSandboxChannel` Submodule" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PinpointApnsVoipSandboxChannel <a name="PinpointApnsVoipSandboxChannel" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel aws_pinpoint_apns_voip_sandbox_channel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.pinpoint_apns_voip_sandbox_channel.PinpointApnsVoipSandboxChannel;

PinpointApnsVoipSandboxChannel.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.applicationId">applicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#application_id PinpointApnsVoipSandboxChannel#application_id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.bundleId">bundleId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#bundle_id PinpointApnsVoipSandboxChannel#bundle_id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.certificate">certificate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#certificate PinpointApnsVoipSandboxChannel#certificate}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.defaultAuthenticationMethod">defaultAuthenticationMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#default_authentication_method PinpointApnsVoipSandboxChannel#default_authentication_method}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#enabled PinpointApnsVoipSandboxChannel#enabled}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#id PinpointApnsVoipSandboxChannel#id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.privateKey">privateKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#private_key PinpointApnsVoipSandboxChannel#private_key}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.teamId">teamId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#team_id PinpointApnsVoipSandboxChannel#team_id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.tokenKey">tokenKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#token_key PinpointApnsVoipSandboxChannel#token_key}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.tokenKeyId">tokenKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#token_key_id PinpointApnsVoipSandboxChannel#token_key_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.applicationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#application_id PinpointApnsVoipSandboxChannel#application_id}.

---

##### `bundleId`<sup>Optional</sup> <a name="bundleId" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.bundleId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#bundle_id PinpointApnsVoipSandboxChannel#bundle_id}.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.certificate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#certificate PinpointApnsVoipSandboxChannel#certificate}.

---

##### `defaultAuthenticationMethod`<sup>Optional</sup> <a name="defaultAuthenticationMethod" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.defaultAuthenticationMethod"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#default_authentication_method PinpointApnsVoipSandboxChannel#default_authentication_method}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#enabled PinpointApnsVoipSandboxChannel#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#id PinpointApnsVoipSandboxChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.privateKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#private_key PinpointApnsVoipSandboxChannel#private_key}.

---

##### `teamId`<sup>Optional</sup> <a name="teamId" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.teamId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#team_id PinpointApnsVoipSandboxChannel#team_id}.

---

##### `tokenKey`<sup>Optional</sup> <a name="tokenKey" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.tokenKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#token_key PinpointApnsVoipSandboxChannel#token_key}.

---

##### `tokenKeyId`<sup>Optional</sup> <a name="tokenKeyId" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.Initializer.parameter.tokenKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#token_key_id PinpointApnsVoipSandboxChannel#token_key_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetBundleId">resetBundleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetDefaultAuthenticationMethod">resetDefaultAuthenticationMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetPrivateKey">resetPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetTeamId">resetTeamId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetTokenKey">resetTokenKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetTokenKeyId">resetTokenKeyId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetBundleId` <a name="resetBundleId" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetBundleId"></a>

```java
public void resetBundleId()
```

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetCertificate"></a>

```java
public void resetCertificate()
```

##### `resetDefaultAuthenticationMethod` <a name="resetDefaultAuthenticationMethod" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetDefaultAuthenticationMethod"></a>

```java
public void resetDefaultAuthenticationMethod()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetId"></a>

```java
public void resetId()
```

##### `resetPrivateKey` <a name="resetPrivateKey" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetPrivateKey"></a>

```java
public void resetPrivateKey()
```

##### `resetTeamId` <a name="resetTeamId" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetTeamId"></a>

```java
public void resetTeamId()
```

##### `resetTokenKey` <a name="resetTokenKey" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetTokenKey"></a>

```java
public void resetTokenKey()
```

##### `resetTokenKeyId` <a name="resetTokenKeyId" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.resetTokenKeyId"></a>

```java
public void resetTokenKeyId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.pinpoint_apns_voip_sandbox_channel.PinpointApnsVoipSandboxChannel;

PinpointApnsVoipSandboxChannel.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.pinpoint_apns_voip_sandbox_channel.PinpointApnsVoipSandboxChannel;

PinpointApnsVoipSandboxChannel.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.pinpoint_apns_voip_sandbox_channel.PinpointApnsVoipSandboxChannel;

PinpointApnsVoipSandboxChannel.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.applicationIdInput">applicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.bundleIdInput">bundleIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.certificateInput">certificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.defaultAuthenticationMethodInput">defaultAuthenticationMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.privateKeyInput">privateKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.teamIdInput">teamIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.tokenKeyIdInput">tokenKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.tokenKeyInput">tokenKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.bundleId">bundleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.certificate">certificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.defaultAuthenticationMethod">defaultAuthenticationMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.teamId">teamId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.tokenKey">tokenKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.tokenKeyId">tokenKeyId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.applicationIdInput"></a>

```java
public java.lang.String getApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `bundleIdInput`<sup>Optional</sup> <a name="bundleIdInput" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.bundleIdInput"></a>

```java
public java.lang.String getBundleIdInput();
```

- *Type:* java.lang.String

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.certificateInput"></a>

```java
public java.lang.String getCertificateInput();
```

- *Type:* java.lang.String

---

##### `defaultAuthenticationMethodInput`<sup>Optional</sup> <a name="defaultAuthenticationMethodInput" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.defaultAuthenticationMethodInput"></a>

```java
public java.lang.String getDefaultAuthenticationMethodInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.privateKeyInput"></a>

```java
public java.lang.String getPrivateKeyInput();
```

- *Type:* java.lang.String

---

##### `teamIdInput`<sup>Optional</sup> <a name="teamIdInput" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.teamIdInput"></a>

```java
public java.lang.String getTeamIdInput();
```

- *Type:* java.lang.String

---

##### `tokenKeyIdInput`<sup>Optional</sup> <a name="tokenKeyIdInput" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.tokenKeyIdInput"></a>

```java
public java.lang.String getTokenKeyIdInput();
```

- *Type:* java.lang.String

---

##### `tokenKeyInput`<sup>Optional</sup> <a name="tokenKeyInput" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.tokenKeyInput"></a>

```java
public java.lang.String getTokenKeyInput();
```

- *Type:* java.lang.String

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `bundleId`<sup>Required</sup> <a name="bundleId" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.bundleId"></a>

```java
public java.lang.String getBundleId();
```

- *Type:* java.lang.String

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

---

##### `defaultAuthenticationMethod`<sup>Required</sup> <a name="defaultAuthenticationMethod" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.defaultAuthenticationMethod"></a>

```java
public java.lang.String getDefaultAuthenticationMethod();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

---

##### `teamId`<sup>Required</sup> <a name="teamId" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.teamId"></a>

```java
public java.lang.String getTeamId();
```

- *Type:* java.lang.String

---

##### `tokenKey`<sup>Required</sup> <a name="tokenKey" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.tokenKey"></a>

```java
public java.lang.String getTokenKey();
```

- *Type:* java.lang.String

---

##### `tokenKeyId`<sup>Required</sup> <a name="tokenKeyId" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.tokenKeyId"></a>

```java
public java.lang.String getTokenKeyId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannel.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PinpointApnsVoipSandboxChannelConfig <a name="PinpointApnsVoipSandboxChannelConfig" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.pinpoint_apns_voip_sandbox_channel.PinpointApnsVoipSandboxChannelConfig;

PinpointApnsVoipSandboxChannelConfig.builder()
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
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#application_id PinpointApnsVoipSandboxChannel#application_id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.bundleId">bundleId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#bundle_id PinpointApnsVoipSandboxChannel#bundle_id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.certificate">certificate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#certificate PinpointApnsVoipSandboxChannel#certificate}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.defaultAuthenticationMethod">defaultAuthenticationMethod</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#default_authentication_method PinpointApnsVoipSandboxChannel#default_authentication_method}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#enabled PinpointApnsVoipSandboxChannel#enabled}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#id PinpointApnsVoipSandboxChannel#id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#private_key PinpointApnsVoipSandboxChannel#private_key}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.teamId">teamId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#team_id PinpointApnsVoipSandboxChannel#team_id}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.tokenKey">tokenKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#token_key PinpointApnsVoipSandboxChannel#token_key}. |
| <code><a href="#@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.tokenKeyId">tokenKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#token_key_id PinpointApnsVoipSandboxChannel#token_key_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#application_id PinpointApnsVoipSandboxChannel#application_id}.

---

##### `bundleId`<sup>Optional</sup> <a name="bundleId" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.bundleId"></a>

```java
public java.lang.String getBundleId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#bundle_id PinpointApnsVoipSandboxChannel#bundle_id}.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#certificate PinpointApnsVoipSandboxChannel#certificate}.

---

##### `defaultAuthenticationMethod`<sup>Optional</sup> <a name="defaultAuthenticationMethod" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.defaultAuthenticationMethod"></a>

```java
public java.lang.String getDefaultAuthenticationMethod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#default_authentication_method PinpointApnsVoipSandboxChannel#default_authentication_method}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#enabled PinpointApnsVoipSandboxChannel#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#id PinpointApnsVoipSandboxChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#private_key PinpointApnsVoipSandboxChannel#private_key}.

---

##### `teamId`<sup>Optional</sup> <a name="teamId" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.teamId"></a>

```java
public java.lang.String getTeamId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#team_id PinpointApnsVoipSandboxChannel#team_id}.

---

##### `tokenKey`<sup>Optional</sup> <a name="tokenKey" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.tokenKey"></a>

```java
public java.lang.String getTokenKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#token_key PinpointApnsVoipSandboxChannel#token_key}.

---

##### `tokenKeyId`<sup>Optional</sup> <a name="tokenKeyId" id="@cdktf/provider-aws.pinpointApnsVoipSandboxChannel.PinpointApnsVoipSandboxChannelConfig.property.tokenKeyId"></a>

```java
public java.lang.String getTokenKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/pinpoint_apns_voip_sandbox_channel#token_key_id PinpointApnsVoipSandboxChannel#token_key_id}.

---



