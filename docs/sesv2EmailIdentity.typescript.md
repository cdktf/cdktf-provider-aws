# `sesv2EmailIdentity` Submodule <a name="`sesv2EmailIdentity` Submodule" id="@cdktf/provider-aws.sesv2EmailIdentity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Sesv2EmailIdentity <a name="Sesv2EmailIdentity" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity aws_sesv2_email_identity}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer"></a>

```typescript
import { sesv2EmailIdentity } from '@cdktf/provider-aws'

new sesv2EmailIdentity.Sesv2EmailIdentity(scope: Construct, id: string, config: Sesv2EmailIdentityConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig">Sesv2EmailIdentityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig">Sesv2EmailIdentityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.putDkimSigningAttributes">putDkimSigningAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.resetConfigurationSetName">resetConfigurationSetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.resetDkimSigningAttributes">resetDkimSigningAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putDkimSigningAttributes` <a name="putDkimSigningAttributes" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.putDkimSigningAttributes"></a>

```typescript
public putDkimSigningAttributes(value: Sesv2EmailIdentityDkimSigningAttributes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.putDkimSigningAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes">Sesv2EmailIdentityDkimSigningAttributes</a>

---

##### `resetConfigurationSetName` <a name="resetConfigurationSetName" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.resetConfigurationSetName"></a>

```typescript
public resetConfigurationSetName(): void
```

##### `resetDkimSigningAttributes` <a name="resetDkimSigningAttributes" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.resetDkimSigningAttributes"></a>

```typescript
public resetDkimSigningAttributes(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.isConstruct"></a>

```typescript
import { sesv2EmailIdentity } from '@cdktf/provider-aws'

sesv2EmailIdentity.Sesv2EmailIdentity.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.isTerraformElement"></a>

```typescript
import { sesv2EmailIdentity } from '@cdktf/provider-aws'

sesv2EmailIdentity.Sesv2EmailIdentity.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.isTerraformResource"></a>

```typescript
import { sesv2EmailIdentity } from '@cdktf/provider-aws'

sesv2EmailIdentity.Sesv2EmailIdentity.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.dkimSigningAttributes">dkimSigningAttributes</a></code> | <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference">Sesv2EmailIdentityDkimSigningAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.identityType">identityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.verifiedForSendingStatus">verifiedForSendingStatus</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.configurationSetNameInput">configurationSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.dkimSigningAttributesInput">dkimSigningAttributesInput</a></code> | <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes">Sesv2EmailIdentityDkimSigningAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.emailIdentityInput">emailIdentityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.configurationSetName">configurationSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.emailIdentity">emailIdentity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `dkimSigningAttributes`<sup>Required</sup> <a name="dkimSigningAttributes" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.dkimSigningAttributes"></a>

```typescript
public readonly dkimSigningAttributes: Sesv2EmailIdentityDkimSigningAttributesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference">Sesv2EmailIdentityDkimSigningAttributesOutputReference</a>

---

##### `identityType`<sup>Required</sup> <a name="identityType" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.identityType"></a>

```typescript
public readonly identityType: string;
```

- *Type:* string

---

##### `verifiedForSendingStatus`<sup>Required</sup> <a name="verifiedForSendingStatus" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.verifiedForSendingStatus"></a>

```typescript
public readonly verifiedForSendingStatus: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `configurationSetNameInput`<sup>Optional</sup> <a name="configurationSetNameInput" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.configurationSetNameInput"></a>

```typescript
public readonly configurationSetNameInput: string;
```

- *Type:* string

---

##### `dkimSigningAttributesInput`<sup>Optional</sup> <a name="dkimSigningAttributesInput" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.dkimSigningAttributesInput"></a>

```typescript
public readonly dkimSigningAttributesInput: Sesv2EmailIdentityDkimSigningAttributes;
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes">Sesv2EmailIdentityDkimSigningAttributes</a>

---

##### `emailIdentityInput`<sup>Optional</sup> <a name="emailIdentityInput" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.emailIdentityInput"></a>

```typescript
public readonly emailIdentityInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `configurationSetName`<sup>Required</sup> <a name="configurationSetName" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.configurationSetName"></a>

```typescript
public readonly configurationSetName: string;
```

- *Type:* string

---

##### `emailIdentity`<sup>Required</sup> <a name="emailIdentity" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.emailIdentity"></a>

```typescript
public readonly emailIdentity: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentity.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Sesv2EmailIdentityConfig <a name="Sesv2EmailIdentityConfig" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.Initializer"></a>

```typescript
import { sesv2EmailIdentity } from '@cdktf/provider-aws'

const sesv2EmailIdentityConfig: sesv2EmailIdentity.Sesv2EmailIdentityConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.emailIdentity">emailIdentity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#email_identity Sesv2EmailIdentity#email_identity}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.configurationSetName">configurationSetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#configuration_set_name Sesv2EmailIdentity#configuration_set_name}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.dkimSigningAttributes">dkimSigningAttributes</a></code> | <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes">Sesv2EmailIdentityDkimSigningAttributes</a></code> | dkim_signing_attributes block. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#id Sesv2EmailIdentity#id}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#tags Sesv2EmailIdentity#tags}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#tags_all Sesv2EmailIdentity#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `emailIdentity`<sup>Required</sup> <a name="emailIdentity" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.emailIdentity"></a>

```typescript
public readonly emailIdentity: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#email_identity Sesv2EmailIdentity#email_identity}.

---

##### `configurationSetName`<sup>Optional</sup> <a name="configurationSetName" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.configurationSetName"></a>

```typescript
public readonly configurationSetName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#configuration_set_name Sesv2EmailIdentity#configuration_set_name}.

---

##### `dkimSigningAttributes`<sup>Optional</sup> <a name="dkimSigningAttributes" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.dkimSigningAttributes"></a>

```typescript
public readonly dkimSigningAttributes: Sesv2EmailIdentityDkimSigningAttributes;
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes">Sesv2EmailIdentityDkimSigningAttributes</a>

dkim_signing_attributes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#dkim_signing_attributes Sesv2EmailIdentity#dkim_signing_attributes}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#id Sesv2EmailIdentity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#tags Sesv2EmailIdentity#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#tags_all Sesv2EmailIdentity#tags_all}.

---

### Sesv2EmailIdentityDkimSigningAttributes <a name="Sesv2EmailIdentityDkimSigningAttributes" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes.Initializer"></a>

```typescript
import { sesv2EmailIdentity } from '@cdktf/provider-aws'

const sesv2EmailIdentityDkimSigningAttributes: sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes.property.domainSigningPrivateKey">domainSigningPrivateKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#domain_signing_private_key Sesv2EmailIdentity#domain_signing_private_key}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes.property.domainSigningSelector">domainSigningSelector</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#domain_signing_selector Sesv2EmailIdentity#domain_signing_selector}. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes.property.nextSigningKeyLength">nextSigningKeyLength</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#next_signing_key_length Sesv2EmailIdentity#next_signing_key_length}. |

---

##### `domainSigningPrivateKey`<sup>Optional</sup> <a name="domainSigningPrivateKey" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes.property.domainSigningPrivateKey"></a>

```typescript
public readonly domainSigningPrivateKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#domain_signing_private_key Sesv2EmailIdentity#domain_signing_private_key}.

---

##### `domainSigningSelector`<sup>Optional</sup> <a name="domainSigningSelector" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes.property.domainSigningSelector"></a>

```typescript
public readonly domainSigningSelector: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#domain_signing_selector Sesv2EmailIdentity#domain_signing_selector}.

---

##### `nextSigningKeyLength`<sup>Optional</sup> <a name="nextSigningKeyLength" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes.property.nextSigningKeyLength"></a>

```typescript
public readonly nextSigningKeyLength: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sesv2_email_identity#next_signing_key_length Sesv2EmailIdentity#next_signing_key_length}.

---

## Classes <a name="Classes" id="Classes"></a>

### Sesv2EmailIdentityDkimSigningAttributesOutputReference <a name="Sesv2EmailIdentityDkimSigningAttributesOutputReference" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer"></a>

```typescript
import { sesv2EmailIdentity } from '@cdktf/provider-aws'

new sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.resetDomainSigningPrivateKey">resetDomainSigningPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.resetDomainSigningSelector">resetDomainSigningSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.resetNextSigningKeyLength">resetNextSigningKeyLength</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDomainSigningPrivateKey` <a name="resetDomainSigningPrivateKey" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.resetDomainSigningPrivateKey"></a>

```typescript
public resetDomainSigningPrivateKey(): void
```

##### `resetDomainSigningSelector` <a name="resetDomainSigningSelector" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.resetDomainSigningSelector"></a>

```typescript
public resetDomainSigningSelector(): void
```

##### `resetNextSigningKeyLength` <a name="resetNextSigningKeyLength" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.resetNextSigningKeyLength"></a>

```typescript
public resetNextSigningKeyLength(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.currentSigningKeyLength">currentSigningKeyLength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.lastKeyGenerationTimestamp">lastKeyGenerationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.signingAttributesOrigin">signingAttributesOrigin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.tokens">tokens</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.domainSigningPrivateKeyInput">domainSigningPrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.domainSigningSelectorInput">domainSigningSelectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.nextSigningKeyLengthInput">nextSigningKeyLengthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.domainSigningPrivateKey">domainSigningPrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.domainSigningSelector">domainSigningSelector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.nextSigningKeyLength">nextSigningKeyLength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes">Sesv2EmailIdentityDkimSigningAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `currentSigningKeyLength`<sup>Required</sup> <a name="currentSigningKeyLength" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.currentSigningKeyLength"></a>

```typescript
public readonly currentSigningKeyLength: string;
```

- *Type:* string

---

##### `lastKeyGenerationTimestamp`<sup>Required</sup> <a name="lastKeyGenerationTimestamp" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.lastKeyGenerationTimestamp"></a>

```typescript
public readonly lastKeyGenerationTimestamp: string;
```

- *Type:* string

---

##### `signingAttributesOrigin`<sup>Required</sup> <a name="signingAttributesOrigin" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.signingAttributesOrigin"></a>

```typescript
public readonly signingAttributesOrigin: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tokens`<sup>Required</sup> <a name="tokens" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.tokens"></a>

```typescript
public readonly tokens: string[];
```

- *Type:* string[]

---

##### `domainSigningPrivateKeyInput`<sup>Optional</sup> <a name="domainSigningPrivateKeyInput" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.domainSigningPrivateKeyInput"></a>

```typescript
public readonly domainSigningPrivateKeyInput: string;
```

- *Type:* string

---

##### `domainSigningSelectorInput`<sup>Optional</sup> <a name="domainSigningSelectorInput" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.domainSigningSelectorInput"></a>

```typescript
public readonly domainSigningSelectorInput: string;
```

- *Type:* string

---

##### `nextSigningKeyLengthInput`<sup>Optional</sup> <a name="nextSigningKeyLengthInput" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.nextSigningKeyLengthInput"></a>

```typescript
public readonly nextSigningKeyLengthInput: string;
```

- *Type:* string

---

##### `domainSigningPrivateKey`<sup>Required</sup> <a name="domainSigningPrivateKey" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.domainSigningPrivateKey"></a>

```typescript
public readonly domainSigningPrivateKey: string;
```

- *Type:* string

---

##### `domainSigningSelector`<sup>Required</sup> <a name="domainSigningSelector" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.domainSigningSelector"></a>

```typescript
public readonly domainSigningSelector: string;
```

- *Type:* string

---

##### `nextSigningKeyLength`<sup>Required</sup> <a name="nextSigningKeyLength" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.nextSigningKeyLength"></a>

```typescript
public readonly nextSigningKeyLength: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Sesv2EmailIdentityDkimSigningAttributes;
```

- *Type:* <a href="#@cdktf/provider-aws.sesv2EmailIdentity.Sesv2EmailIdentityDkimSigningAttributes">Sesv2EmailIdentityDkimSigningAttributes</a>

---



