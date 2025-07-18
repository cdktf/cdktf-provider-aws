# `iotAuthorizer` Submodule <a name="`iotAuthorizer` Submodule" id="@cdktf/provider-aws.iotAuthorizer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotAuthorizer <a name="IotAuthorizer" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer aws_iot_authorizer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.iot_authorizer.IotAuthorizer;

IotAuthorizer.Builder.create(Construct scope, java.lang.String id)
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
    .authorizerFunctionArn(java.lang.String)
    .name(java.lang.String)
//  .enableCachingForHttp(java.lang.Boolean)
//  .enableCachingForHttp(IResolvable)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .signingDisabled(java.lang.Boolean)
//  .signingDisabled(IResolvable)
//  .status(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .tokenKeyName(java.lang.String)
//  .tokenSigningPublicKeys(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.Initializer.parameter.authorizerFunctionArn">authorizerFunctionArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#authorizer_function_arn IotAuthorizer#authorizer_function_arn}. |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#name IotAuthorizer#name}. |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.Initializer.parameter.enableCachingForHttp">enableCachingForHttp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#enable_caching_for_http IotAuthorizer#enable_caching_for_http}. |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#id IotAuthorizer#id}. |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.Initializer.parameter.signingDisabled">signingDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#signing_disabled IotAuthorizer#signing_disabled}. |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#status IotAuthorizer#status}. |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#tags IotAuthorizer#tags}. |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#tags_all IotAuthorizer#tags_all}. |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.Initializer.parameter.tokenKeyName">tokenKeyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#token_key_name IotAuthorizer#token_key_name}. |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.Initializer.parameter.tokenSigningPublicKeys">tokenSigningPublicKeys</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#token_signing_public_keys IotAuthorizer#token_signing_public_keys}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authorizerFunctionArn`<sup>Required</sup> <a name="authorizerFunctionArn" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.Initializer.parameter.authorizerFunctionArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#authorizer_function_arn IotAuthorizer#authorizer_function_arn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#name IotAuthorizer#name}.

---

##### `enableCachingForHttp`<sup>Optional</sup> <a name="enableCachingForHttp" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.Initializer.parameter.enableCachingForHttp"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#enable_caching_for_http IotAuthorizer#enable_caching_for_http}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#id IotAuthorizer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#region IotAuthorizer#region}

---

##### `signingDisabled`<sup>Optional</sup> <a name="signingDisabled" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.Initializer.parameter.signingDisabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#signing_disabled IotAuthorizer#signing_disabled}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#status IotAuthorizer#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#tags IotAuthorizer#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#tags_all IotAuthorizer#tags_all}.

---

##### `tokenKeyName`<sup>Optional</sup> <a name="tokenKeyName" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.Initializer.parameter.tokenKeyName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#token_key_name IotAuthorizer#token_key_name}.

---

##### `tokenSigningPublicKeys`<sup>Optional</sup> <a name="tokenSigningPublicKeys" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.Initializer.parameter.tokenSigningPublicKeys"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#token_signing_public_keys IotAuthorizer#token_signing_public_keys}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.resetEnableCachingForHttp">resetEnableCachingForHttp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.resetSigningDisabled">resetSigningDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.resetTokenKeyName">resetTokenKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.resetTokenSigningPublicKeys">resetTokenSigningPublicKeys</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetEnableCachingForHttp` <a name="resetEnableCachingForHttp" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.resetEnableCachingForHttp"></a>

```java
public void resetEnableCachingForHttp()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.resetId"></a>

```java
public void resetId()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSigningDisabled` <a name="resetSigningDisabled" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.resetSigningDisabled"></a>

```java
public void resetSigningDisabled()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTokenKeyName` <a name="resetTokenKeyName" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.resetTokenKeyName"></a>

```java
public void resetTokenKeyName()
```

##### `resetTokenSigningPublicKeys` <a name="resetTokenSigningPublicKeys" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.resetTokenSigningPublicKeys"></a>

```java
public void resetTokenSigningPublicKeys()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IotAuthorizer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.iot_authorizer.IotAuthorizer;

IotAuthorizer.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.iot_authorizer.IotAuthorizer;

IotAuthorizer.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.iot_authorizer.IotAuthorizer;

IotAuthorizer.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.iot_authorizer.IotAuthorizer;

IotAuthorizer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IotAuthorizer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IotAuthorizer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IotAuthorizer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IotAuthorizer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IotAuthorizer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.authorizerFunctionArnInput">authorizerFunctionArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.enableCachingForHttpInput">enableCachingForHttpInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.signingDisabledInput">signingDisabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.tokenKeyNameInput">tokenKeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.tokenSigningPublicKeysInput">tokenSigningPublicKeysInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.authorizerFunctionArn">authorizerFunctionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.enableCachingForHttp">enableCachingForHttp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.signingDisabled">signingDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.tokenKeyName">tokenKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.tokenSigningPublicKeys">tokenSigningPublicKeys</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `authorizerFunctionArnInput`<sup>Optional</sup> <a name="authorizerFunctionArnInput" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.authorizerFunctionArnInput"></a>

```java
public java.lang.String getAuthorizerFunctionArnInput();
```

- *Type:* java.lang.String

---

##### `enableCachingForHttpInput`<sup>Optional</sup> <a name="enableCachingForHttpInput" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.enableCachingForHttpInput"></a>

```java
public java.lang.Object getEnableCachingForHttpInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `signingDisabledInput`<sup>Optional</sup> <a name="signingDisabledInput" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.signingDisabledInput"></a>

```java
public java.lang.Object getSigningDisabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tokenKeyNameInput`<sup>Optional</sup> <a name="tokenKeyNameInput" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.tokenKeyNameInput"></a>

```java
public java.lang.String getTokenKeyNameInput();
```

- *Type:* java.lang.String

---

##### `tokenSigningPublicKeysInput`<sup>Optional</sup> <a name="tokenSigningPublicKeysInput" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.tokenSigningPublicKeysInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTokenSigningPublicKeysInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `authorizerFunctionArn`<sup>Required</sup> <a name="authorizerFunctionArn" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.authorizerFunctionArn"></a>

```java
public java.lang.String getAuthorizerFunctionArn();
```

- *Type:* java.lang.String

---

##### `enableCachingForHttp`<sup>Required</sup> <a name="enableCachingForHttp" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.enableCachingForHttp"></a>

```java
public java.lang.Object getEnableCachingForHttp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `signingDisabled`<sup>Required</sup> <a name="signingDisabled" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.signingDisabled"></a>

```java
public java.lang.Object getSigningDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tokenKeyName`<sup>Required</sup> <a name="tokenKeyName" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.tokenKeyName"></a>

```java
public java.lang.String getTokenKeyName();
```

- *Type:* java.lang.String

---

##### `tokenSigningPublicKeys`<sup>Required</sup> <a name="tokenSigningPublicKeys" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.tokenSigningPublicKeys"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTokenSigningPublicKeys();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizer.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IotAuthorizerConfig <a name="IotAuthorizerConfig" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.iot_authorizer.IotAuthorizerConfig;

IotAuthorizerConfig.builder()
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
    .authorizerFunctionArn(java.lang.String)
    .name(java.lang.String)
//  .enableCachingForHttp(java.lang.Boolean)
//  .enableCachingForHttp(IResolvable)
//  .id(java.lang.String)
//  .region(java.lang.String)
//  .signingDisabled(java.lang.Boolean)
//  .signingDisabled(IResolvable)
//  .status(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .tokenKeyName(java.lang.String)
//  .tokenSigningPublicKeys(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.authorizerFunctionArn">authorizerFunctionArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#authorizer_function_arn IotAuthorizer#authorizer_function_arn}. |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#name IotAuthorizer#name}. |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.enableCachingForHttp">enableCachingForHttp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#enable_caching_for_http IotAuthorizer#enable_caching_for_http}. |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#id IotAuthorizer#id}. |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.signingDisabled">signingDisabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#signing_disabled IotAuthorizer#signing_disabled}. |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#status IotAuthorizer#status}. |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#tags IotAuthorizer#tags}. |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#tags_all IotAuthorizer#tags_all}. |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.tokenKeyName">tokenKeyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#token_key_name IotAuthorizer#token_key_name}. |
| <code><a href="#@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.tokenSigningPublicKeys">tokenSigningPublicKeys</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#token_signing_public_keys IotAuthorizer#token_signing_public_keys}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authorizerFunctionArn`<sup>Required</sup> <a name="authorizerFunctionArn" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.authorizerFunctionArn"></a>

```java
public java.lang.String getAuthorizerFunctionArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#authorizer_function_arn IotAuthorizer#authorizer_function_arn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#name IotAuthorizer#name}.

---

##### `enableCachingForHttp`<sup>Optional</sup> <a name="enableCachingForHttp" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.enableCachingForHttp"></a>

```java
public java.lang.Object getEnableCachingForHttp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#enable_caching_for_http IotAuthorizer#enable_caching_for_http}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#id IotAuthorizer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#region IotAuthorizer#region}

---

##### `signingDisabled`<sup>Optional</sup> <a name="signingDisabled" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.signingDisabled"></a>

```java
public java.lang.Object getSigningDisabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#signing_disabled IotAuthorizer#signing_disabled}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#status IotAuthorizer#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#tags IotAuthorizer#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#tags_all IotAuthorizer#tags_all}.

---

##### `tokenKeyName`<sup>Optional</sup> <a name="tokenKeyName" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.tokenKeyName"></a>

```java
public java.lang.String getTokenKeyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#token_key_name IotAuthorizer#token_key_name}.

---

##### `tokenSigningPublicKeys`<sup>Optional</sup> <a name="tokenSigningPublicKeys" id="@cdktf/provider-aws.iotAuthorizer.IotAuthorizerConfig.property.tokenSigningPublicKeys"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTokenSigningPublicKeys();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/iot_authorizer#token_signing_public_keys IotAuthorizer#token_signing_public_keys}.

---



