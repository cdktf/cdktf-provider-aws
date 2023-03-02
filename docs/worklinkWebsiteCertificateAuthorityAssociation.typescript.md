# `worklinkWebsiteCertificateAuthorityAssociation` Submodule <a name="`worklinkWebsiteCertificateAuthorityAssociation` Submodule" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorklinkWebsiteCertificateAuthorityAssociation <a name="WorklinkWebsiteCertificateAuthorityAssociation" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/worklink_website_certificate_authority_association aws_worklink_website_certificate_authority_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.Initializer"></a>

```typescript
import { worklinkWebsiteCertificateAuthorityAssociation } from '@cdktf/provider-aws'

new worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation(scope: Construct, id: string, config: WorklinkWebsiteCertificateAuthorityAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig">WorklinkWebsiteCertificateAuthorityAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig">WorklinkWebsiteCertificateAuthorityAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.isConstruct"></a>

```typescript
import { worklinkWebsiteCertificateAuthorityAssociation } from '@cdktf/provider-aws'

worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.isTerraformElement"></a>

```typescript
import { worklinkWebsiteCertificateAuthorityAssociation } from '@cdktf/provider-aws'

worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.isTerraformResource"></a>

```typescript
import { worklinkWebsiteCertificateAuthorityAssociation } from '@cdktf/provider-aws'

worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.websiteCaId">websiteCaId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.certificateInput">certificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.fleetArnInput">fleetArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.fleetArn">fleetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `websiteCaId`<sup>Required</sup> <a name="websiteCaId" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.websiteCaId"></a>

```typescript
public readonly websiteCaId: string;
```

- *Type:* string

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.certificateInput"></a>

```typescript
public readonly certificateInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `fleetArnInput`<sup>Optional</sup> <a name="fleetArnInput" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.fleetArnInput"></a>

```typescript
public readonly fleetArnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `fleetArn`<sup>Required</sup> <a name="fleetArn" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.fleetArn"></a>

```typescript
public readonly fleetArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorklinkWebsiteCertificateAuthorityAssociationConfig <a name="WorklinkWebsiteCertificateAuthorityAssociationConfig" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.Initializer"></a>

```typescript
import { worklinkWebsiteCertificateAuthorityAssociation } from '@cdktf/provider-aws'

const worklinkWebsiteCertificateAuthorityAssociationConfig: worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.certificate">certificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_website_certificate_authority_association#certificate WorklinkWebsiteCertificateAuthorityAssociation#certificate}. |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.fleetArn">fleetArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_website_certificate_authority_association#fleet_arn WorklinkWebsiteCertificateAuthorityAssociation#fleet_arn}. |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_website_certificate_authority_association#display_name WorklinkWebsiteCertificateAuthorityAssociation#display_name}. |
| <code><a href="#@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_website_certificate_authority_association#id WorklinkWebsiteCertificateAuthorityAssociation#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_website_certificate_authority_association#certificate WorklinkWebsiteCertificateAuthorityAssociation#certificate}.

---

##### `fleetArn`<sup>Required</sup> <a name="fleetArn" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.fleetArn"></a>

```typescript
public readonly fleetArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_website_certificate_authority_association#fleet_arn WorklinkWebsiteCertificateAuthorityAssociation#fleet_arn}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_website_certificate_authority_association#display_name WorklinkWebsiteCertificateAuthorityAssociation#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.worklinkWebsiteCertificateAuthorityAssociation.WorklinkWebsiteCertificateAuthorityAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/worklink_website_certificate_authority_association#id WorklinkWebsiteCertificateAuthorityAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



