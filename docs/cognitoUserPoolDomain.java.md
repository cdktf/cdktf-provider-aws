# `cognitoUserPoolDomain` Submodule <a name="`cognitoUserPoolDomain` Submodule" id="@cdktf/provider-aws.cognitoUserPoolDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CognitoUserPoolDomain <a name="CognitoUserPoolDomain" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cognito_user_pool_domain aws_cognito_user_pool_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool_domain.CognitoUserPoolDomain;

CognitoUserPoolDomain.Builder.create(Construct scope, java.lang.String id)
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
    .domain(java.lang.String)
    .userPoolId(java.lang.String)
//  .certificateArn(java.lang.String)
//  .id(java.lang.String)
//  .managedLoginVersion(java.lang.Number)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.domain">domain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cognito_user_pool_domain#domain CognitoUserPoolDomain#domain}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.userPoolId">userPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cognito_user_pool_domain#user_pool_id CognitoUserPoolDomain#user_pool_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cognito_user_pool_domain#certificate_arn CognitoUserPoolDomain#certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cognito_user_pool_domain#id CognitoUserPoolDomain#id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.managedLoginVersion">managedLoginVersion</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cognito_user_pool_domain#managed_login_version CognitoUserPoolDomain#managed_login_version}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.domain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cognito_user_pool_domain#domain CognitoUserPoolDomain#domain}.

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.userPoolId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cognito_user_pool_domain#user_pool_id CognitoUserPoolDomain#user_pool_id}.

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.certificateArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cognito_user_pool_domain#certificate_arn CognitoUserPoolDomain#certificate_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cognito_user_pool_domain#id CognitoUserPoolDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managedLoginVersion`<sup>Optional</sup> <a name="managedLoginVersion" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.managedLoginVersion"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cognito_user_pool_domain#managed_login_version CognitoUserPoolDomain#managed_login_version}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cognito_user_pool_domain#region CognitoUserPoolDomain#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.resetCertificateArn">resetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.resetManagedLoginVersion">resetManagedLoginVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCertificateArn` <a name="resetCertificateArn" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.resetCertificateArn"></a>

```java
public void resetCertificateArn()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.resetId"></a>

```java
public void resetId()
```

##### `resetManagedLoginVersion` <a name="resetManagedLoginVersion" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.resetManagedLoginVersion"></a>

```java
public void resetManagedLoginVersion()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CognitoUserPoolDomain resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool_domain.CognitoUserPoolDomain;

CognitoUserPoolDomain.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool_domain.CognitoUserPoolDomain;

CognitoUserPoolDomain.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool_domain.CognitoUserPoolDomain;

CognitoUserPoolDomain.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool_domain.CognitoUserPoolDomain;

CognitoUserPoolDomain.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CognitoUserPoolDomain.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CognitoUserPoolDomain resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CognitoUserPoolDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CognitoUserPoolDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cognito_user_pool_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CognitoUserPoolDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.cloudfrontDistribution">cloudfrontDistribution</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.cloudfrontDistributionArn">cloudfrontDistributionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.cloudfrontDistributionZoneId">cloudfrontDistributionZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.s3Bucket">s3Bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.certificateArnInput">certificateArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.domainInput">domainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.managedLoginVersionInput">managedLoginVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.userPoolIdInput">userPoolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.managedLoginVersion">managedLoginVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.userPoolId">userPoolId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.awsAccountId"></a>

```java
public java.lang.String getAwsAccountId();
```

- *Type:* java.lang.String

---

##### `cloudfrontDistribution`<sup>Required</sup> <a name="cloudfrontDistribution" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.cloudfrontDistribution"></a>

```java
public java.lang.String getCloudfrontDistribution();
```

- *Type:* java.lang.String

---

##### `cloudfrontDistributionArn`<sup>Required</sup> <a name="cloudfrontDistributionArn" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.cloudfrontDistributionArn"></a>

```java
public java.lang.String getCloudfrontDistributionArn();
```

- *Type:* java.lang.String

---

##### `cloudfrontDistributionZoneId`<sup>Required</sup> <a name="cloudfrontDistributionZoneId" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.cloudfrontDistributionZoneId"></a>

```java
public java.lang.String getCloudfrontDistributionZoneId();
```

- *Type:* java.lang.String

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.s3Bucket"></a>

```java
public java.lang.String getS3Bucket();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `certificateArnInput`<sup>Optional</sup> <a name="certificateArnInput" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.certificateArnInput"></a>

```java
public java.lang.String getCertificateArnInput();
```

- *Type:* java.lang.String

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.domainInput"></a>

```java
public java.lang.String getDomainInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `managedLoginVersionInput`<sup>Optional</sup> <a name="managedLoginVersionInput" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.managedLoginVersionInput"></a>

```java
public java.lang.Number getManagedLoginVersionInput();
```

- *Type:* java.lang.Number

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `userPoolIdInput`<sup>Optional</sup> <a name="userPoolIdInput" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.userPoolIdInput"></a>

```java
public java.lang.String getUserPoolIdInput();
```

- *Type:* java.lang.String

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.certificateArn"></a>

```java
public java.lang.String getCertificateArn();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `managedLoginVersion`<sup>Required</sup> <a name="managedLoginVersion" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.managedLoginVersion"></a>

```java
public java.lang.Number getManagedLoginVersion();
```

- *Type:* java.lang.Number

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.userPoolId"></a>

```java
public java.lang.String getUserPoolId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomain.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CognitoUserPoolDomainConfig <a name="CognitoUserPoolDomainConfig" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.cognito_user_pool_domain.CognitoUserPoolDomainConfig;

CognitoUserPoolDomainConfig.builder()
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
    .domain(java.lang.String)
    .userPoolId(java.lang.String)
//  .certificateArn(java.lang.String)
//  .id(java.lang.String)
//  .managedLoginVersion(java.lang.Number)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.domain">domain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cognito_user_pool_domain#domain CognitoUserPoolDomain#domain}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.userPoolId">userPoolId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cognito_user_pool_domain#user_pool_id CognitoUserPoolDomain#user_pool_id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cognito_user_pool_domain#certificate_arn CognitoUserPoolDomain#certificate_arn}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cognito_user_pool_domain#id CognitoUserPoolDomain#id}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.managedLoginVersion">managedLoginVersion</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cognito_user_pool_domain#managed_login_version CognitoUserPoolDomain#managed_login_version}. |
| <code><a href="#@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cognito_user_pool_domain#domain CognitoUserPoolDomain#domain}.

---

##### `userPoolId`<sup>Required</sup> <a name="userPoolId" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.userPoolId"></a>

```java
public java.lang.String getUserPoolId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cognito_user_pool_domain#user_pool_id CognitoUserPoolDomain#user_pool_id}.

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.certificateArn"></a>

```java
public java.lang.String getCertificateArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cognito_user_pool_domain#certificate_arn CognitoUserPoolDomain#certificate_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cognito_user_pool_domain#id CognitoUserPoolDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managedLoginVersion`<sup>Optional</sup> <a name="managedLoginVersion" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.managedLoginVersion"></a>

```java
public java.lang.Number getManagedLoginVersion();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cognito_user_pool_domain#managed_login_version CognitoUserPoolDomain#managed_login_version}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.cognitoUserPoolDomain.CognitoUserPoolDomainConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cognito_user_pool_domain#region CognitoUserPoolDomain#region}

---



