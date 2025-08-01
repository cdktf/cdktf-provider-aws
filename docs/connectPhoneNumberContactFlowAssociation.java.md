# `connectPhoneNumberContactFlowAssociation` Submodule <a name="`connectPhoneNumberContactFlowAssociation` Submodule" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectPhoneNumberContactFlowAssociation <a name="ConnectPhoneNumberContactFlowAssociation" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/connect_phone_number_contact_flow_association aws_connect_phone_number_contact_flow_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_phone_number_contact_flow_association.ConnectPhoneNumberContactFlowAssociation;

ConnectPhoneNumberContactFlowAssociation.Builder.create(Construct scope, java.lang.String id)
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
    .contactFlowId(java.lang.String)
    .instanceId(java.lang.String)
    .phoneNumberId(java.lang.String)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.Initializer.parameter.contactFlowId">contactFlowId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/connect_phone_number_contact_flow_association#contact_flow_id ConnectPhoneNumberContactFlowAssociation#contact_flow_id}. |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.Initializer.parameter.instanceId">instanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/connect_phone_number_contact_flow_association#instance_id ConnectPhoneNumberContactFlowAssociation#instance_id}. |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.Initializer.parameter.phoneNumberId">phoneNumberId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/connect_phone_number_contact_flow_association#phone_number_id ConnectPhoneNumberContactFlowAssociation#phone_number_id}. |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `contactFlowId`<sup>Required</sup> <a name="contactFlowId" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.Initializer.parameter.contactFlowId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/connect_phone_number_contact_flow_association#contact_flow_id ConnectPhoneNumberContactFlowAssociation#contact_flow_id}.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.Initializer.parameter.instanceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/connect_phone_number_contact_flow_association#instance_id ConnectPhoneNumberContactFlowAssociation#instance_id}.

---

##### `phoneNumberId`<sup>Required</sup> <a name="phoneNumberId" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.Initializer.parameter.phoneNumberId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/connect_phone_number_contact_flow_association#phone_number_id ConnectPhoneNumberContactFlowAssociation#phone_number_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/connect_phone_number_contact_flow_association#region ConnectPhoneNumberContactFlowAssociation#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ConnectPhoneNumberContactFlowAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_phone_number_contact_flow_association.ConnectPhoneNumberContactFlowAssociation;

ConnectPhoneNumberContactFlowAssociation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_phone_number_contact_flow_association.ConnectPhoneNumberContactFlowAssociation;

ConnectPhoneNumberContactFlowAssociation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_phone_number_contact_flow_association.ConnectPhoneNumberContactFlowAssociation;

ConnectPhoneNumberContactFlowAssociation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_phone_number_contact_flow_association.ConnectPhoneNumberContactFlowAssociation;

ConnectPhoneNumberContactFlowAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ConnectPhoneNumberContactFlowAssociation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ConnectPhoneNumberContactFlowAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ConnectPhoneNumberContactFlowAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ConnectPhoneNumberContactFlowAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/connect_phone_number_contact_flow_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ConnectPhoneNumberContactFlowAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.contactFlowIdInput">contactFlowIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.instanceIdInput">instanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.phoneNumberIdInput">phoneNumberIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.contactFlowId">contactFlowId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.phoneNumberId">phoneNumberId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `contactFlowIdInput`<sup>Optional</sup> <a name="contactFlowIdInput" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.contactFlowIdInput"></a>

```java
public java.lang.String getContactFlowIdInput();
```

- *Type:* java.lang.String

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.instanceIdInput"></a>

```java
public java.lang.String getInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `phoneNumberIdInput`<sup>Optional</sup> <a name="phoneNumberIdInput" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.phoneNumberIdInput"></a>

```java
public java.lang.String getPhoneNumberIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `contactFlowId`<sup>Required</sup> <a name="contactFlowId" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.contactFlowId"></a>

```java
public java.lang.String getContactFlowId();
```

- *Type:* java.lang.String

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

---

##### `phoneNumberId`<sup>Required</sup> <a name="phoneNumberId" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.phoneNumberId"></a>

```java
public java.lang.String getPhoneNumberId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectPhoneNumberContactFlowAssociationConfig <a name="ConnectPhoneNumberContactFlowAssociationConfig" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.connect_phone_number_contact_flow_association.ConnectPhoneNumberContactFlowAssociationConfig;

ConnectPhoneNumberContactFlowAssociationConfig.builder()
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
    .contactFlowId(java.lang.String)
    .instanceId(java.lang.String)
    .phoneNumberId(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.contactFlowId">contactFlowId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/connect_phone_number_contact_flow_association#contact_flow_id ConnectPhoneNumberContactFlowAssociation#contact_flow_id}. |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/connect_phone_number_contact_flow_association#instance_id ConnectPhoneNumberContactFlowAssociation#instance_id}. |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.phoneNumberId">phoneNumberId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/connect_phone_number_contact_flow_association#phone_number_id ConnectPhoneNumberContactFlowAssociation#phone_number_id}. |
| <code><a href="#@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `contactFlowId`<sup>Required</sup> <a name="contactFlowId" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.contactFlowId"></a>

```java
public java.lang.String getContactFlowId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/connect_phone_number_contact_flow_association#contact_flow_id ConnectPhoneNumberContactFlowAssociation#contact_flow_id}.

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/connect_phone_number_contact_flow_association#instance_id ConnectPhoneNumberContactFlowAssociation#instance_id}.

---

##### `phoneNumberId`<sup>Required</sup> <a name="phoneNumberId" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.phoneNumberId"></a>

```java
public java.lang.String getPhoneNumberId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/connect_phone_number_contact_flow_association#phone_number_id ConnectPhoneNumberContactFlowAssociation#phone_number_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.connectPhoneNumberContactFlowAssociation.ConnectPhoneNumberContactFlowAssociationConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/connect_phone_number_contact_flow_association#region ConnectPhoneNumberContactFlowAssociation#region}

---



