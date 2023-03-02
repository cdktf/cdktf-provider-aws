# `rolesanywhereProfile` Submodule <a name="`rolesanywhereProfile` Submodule" id="@cdktf/provider-aws.rolesanywhereProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RolesanywhereProfile <a name="RolesanywhereProfile" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile aws_rolesanywhere_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.Initializer"></a>

```typescript
import { rolesanywhereProfile } from '@cdktf/provider-aws'

new rolesanywhereProfile.RolesanywhereProfile(scope: Construct, id: string, config: RolesanywhereProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig">RolesanywhereProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig">RolesanywhereProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.resetDurationSeconds">resetDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.resetManagedPolicyArns">resetManagedPolicyArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.resetRequireInstanceProperties">resetRequireInstanceProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.resetSessionPolicy">resetSessionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDurationSeconds` <a name="resetDurationSeconds" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.resetDurationSeconds"></a>

```typescript
public resetDurationSeconds(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.resetId"></a>

```typescript
public resetId(): void
```

##### `resetManagedPolicyArns` <a name="resetManagedPolicyArns" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.resetManagedPolicyArns"></a>

```typescript
public resetManagedPolicyArns(): void
```

##### `resetRequireInstanceProperties` <a name="resetRequireInstanceProperties" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.resetRequireInstanceProperties"></a>

```typescript
public resetRequireInstanceProperties(): void
```

##### `resetSessionPolicy` <a name="resetSessionPolicy" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.resetSessionPolicy"></a>

```typescript
public resetSessionPolicy(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.isConstruct"></a>

```typescript
import { rolesanywhereProfile } from '@cdktf/provider-aws'

rolesanywhereProfile.RolesanywhereProfile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.isTerraformElement"></a>

```typescript
import { rolesanywhereProfile } from '@cdktf/provider-aws'

rolesanywhereProfile.RolesanywhereProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.isTerraformResource"></a>

```typescript
import { rolesanywhereProfile } from '@cdktf/provider-aws'

rolesanywhereProfile.RolesanywhereProfile.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.durationSecondsInput">durationSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.managedPolicyArnsInput">managedPolicyArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.requireInstancePropertiesInput">requireInstancePropertiesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.roleArnsInput">roleArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.sessionPolicyInput">sessionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.durationSeconds">durationSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.managedPolicyArns">managedPolicyArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.requireInstanceProperties">requireInstanceProperties</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.roleArns">roleArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.sessionPolicy">sessionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `durationSecondsInput`<sup>Optional</sup> <a name="durationSecondsInput" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.durationSecondsInput"></a>

```typescript
public readonly durationSecondsInput: number;
```

- *Type:* number

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `managedPolicyArnsInput`<sup>Optional</sup> <a name="managedPolicyArnsInput" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.managedPolicyArnsInput"></a>

```typescript
public readonly managedPolicyArnsInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `requireInstancePropertiesInput`<sup>Optional</sup> <a name="requireInstancePropertiesInput" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.requireInstancePropertiesInput"></a>

```typescript
public readonly requireInstancePropertiesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `roleArnsInput`<sup>Optional</sup> <a name="roleArnsInput" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.roleArnsInput"></a>

```typescript
public readonly roleArnsInput: string[];
```

- *Type:* string[]

---

##### `sessionPolicyInput`<sup>Optional</sup> <a name="sessionPolicyInput" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.sessionPolicyInput"></a>

```typescript
public readonly sessionPolicyInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `durationSeconds`<sup>Required</sup> <a name="durationSeconds" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.durationSeconds"></a>

```typescript
public readonly durationSeconds: number;
```

- *Type:* number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedPolicyArns`<sup>Required</sup> <a name="managedPolicyArns" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.managedPolicyArns"></a>

```typescript
public readonly managedPolicyArns: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `requireInstanceProperties`<sup>Required</sup> <a name="requireInstanceProperties" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.requireInstanceProperties"></a>

```typescript
public readonly requireInstanceProperties: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `roleArns`<sup>Required</sup> <a name="roleArns" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.roleArns"></a>

```typescript
public readonly roleArns: string[];
```

- *Type:* string[]

---

##### `sessionPolicy`<sup>Required</sup> <a name="sessionPolicy" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.sessionPolicy"></a>

```typescript
public readonly sessionPolicy: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RolesanywhereProfileConfig <a name="RolesanywhereProfileConfig" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.Initializer"></a>

```typescript
import { rolesanywhereProfile } from '@cdktf/provider-aws'

const rolesanywhereProfileConfig: rolesanywhereProfile.RolesanywhereProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#name RolesanywhereProfile#name}. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.roleArns">roleArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#role_arns RolesanywhereProfile#role_arns}. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.durationSeconds">durationSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#duration_seconds RolesanywhereProfile#duration_seconds}. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#enabled RolesanywhereProfile#enabled}. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#id RolesanywhereProfile#id}. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.managedPolicyArns">managedPolicyArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#managed_policy_arns RolesanywhereProfile#managed_policy_arns}. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.requireInstanceProperties">requireInstanceProperties</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#require_instance_properties RolesanywhereProfile#require_instance_properties}. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.sessionPolicy">sessionPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#session_policy RolesanywhereProfile#session_policy}. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#tags RolesanywhereProfile#tags}. |
| <code><a href="#@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#tags_all RolesanywhereProfile#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#name RolesanywhereProfile#name}.

---

##### `roleArns`<sup>Required</sup> <a name="roleArns" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.roleArns"></a>

```typescript
public readonly roleArns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#role_arns RolesanywhereProfile#role_arns}.

---

##### `durationSeconds`<sup>Optional</sup> <a name="durationSeconds" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.durationSeconds"></a>

```typescript
public readonly durationSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#duration_seconds RolesanywhereProfile#duration_seconds}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#enabled RolesanywhereProfile#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#id RolesanywhereProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managedPolicyArns`<sup>Optional</sup> <a name="managedPolicyArns" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.managedPolicyArns"></a>

```typescript
public readonly managedPolicyArns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#managed_policy_arns RolesanywhereProfile#managed_policy_arns}.

---

##### `requireInstanceProperties`<sup>Optional</sup> <a name="requireInstanceProperties" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.requireInstanceProperties"></a>

```typescript
public readonly requireInstanceProperties: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#require_instance_properties RolesanywhereProfile#require_instance_properties}.

---

##### `sessionPolicy`<sup>Optional</sup> <a name="sessionPolicy" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.sessionPolicy"></a>

```typescript
public readonly sessionPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#session_policy RolesanywhereProfile#session_policy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#tags RolesanywhereProfile#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.rolesanywhereProfile.RolesanywhereProfileConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/rolesanywhere_profile#tags_all RolesanywhereProfile#tags_all}.

---



