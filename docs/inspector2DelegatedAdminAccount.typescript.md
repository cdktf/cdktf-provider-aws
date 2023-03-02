# `inspector2DelegatedAdminAccount` Submodule <a name="`inspector2DelegatedAdminAccount` Submodule" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Inspector2DelegatedAdminAccount <a name="Inspector2DelegatedAdminAccount" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/inspector2_delegated_admin_account aws_inspector2_delegated_admin_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer"></a>

```typescript
import { inspector2DelegatedAdminAccount } from '@cdktf/provider-aws'

new inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount(scope: Construct, id: string, config: Inspector2DelegatedAdminAccountConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig">Inspector2DelegatedAdminAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig">Inspector2DelegatedAdminAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.putTimeouts"></a>

```typescript
public putTimeouts(value: Inspector2DelegatedAdminAccountTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts">Inspector2DelegatedAdminAccountTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.isConstruct"></a>

```typescript
import { inspector2DelegatedAdminAccount } from '@cdktf/provider-aws'

inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.isTerraformElement"></a>

```typescript
import { inspector2DelegatedAdminAccount } from '@cdktf/provider-aws'

inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.isTerraformResource"></a>

```typescript
import { inspector2DelegatedAdminAccount } from '@cdktf/provider-aws'

inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.relationshipStatus">relationshipStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference">Inspector2DelegatedAdminAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts">Inspector2DelegatedAdminAccountTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `relationshipStatus`<sup>Required</sup> <a name="relationshipStatus" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.relationshipStatus"></a>

```typescript
public readonly relationshipStatus: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.timeouts"></a>

```typescript
public readonly timeouts: Inspector2DelegatedAdminAccountTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference">Inspector2DelegatedAdminAccountTimeoutsOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: Inspector2DelegatedAdminAccountTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts">Inspector2DelegatedAdminAccountTimeouts</a> | cdktf.IResolvable

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccount.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Inspector2DelegatedAdminAccountConfig <a name="Inspector2DelegatedAdminAccountConfig" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.Initializer"></a>

```typescript
import { inspector2DelegatedAdminAccount } from '@cdktf/provider-aws'

const inspector2DelegatedAdminAccountConfig: inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_delegated_admin_account#account_id Inspector2DelegatedAdminAccount#account_id}. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_delegated_admin_account#id Inspector2DelegatedAdminAccount#id}. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts">Inspector2DelegatedAdminAccountTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_delegated_admin_account#account_id Inspector2DelegatedAdminAccount#account_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_delegated_admin_account#id Inspector2DelegatedAdminAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountConfig.property.timeouts"></a>

```typescript
public readonly timeouts: Inspector2DelegatedAdminAccountTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts">Inspector2DelegatedAdminAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_delegated_admin_account#timeouts Inspector2DelegatedAdminAccount#timeouts}

---

### Inspector2DelegatedAdminAccountTimeouts <a name="Inspector2DelegatedAdminAccountTimeouts" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts.Initializer"></a>

```typescript
import { inspector2DelegatedAdminAccount } from '@cdktf/provider-aws'

const inspector2DelegatedAdminAccountTimeouts: inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_delegated_admin_account#create Inspector2DelegatedAdminAccount#create}. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_delegated_admin_account#delete Inspector2DelegatedAdminAccount#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_delegated_admin_account#create Inspector2DelegatedAdminAccount#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/inspector2_delegated_admin_account#delete Inspector2DelegatedAdminAccount#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### Inspector2DelegatedAdminAccountTimeoutsOutputReference <a name="Inspector2DelegatedAdminAccountTimeoutsOutputReference" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.Initializer"></a>

```typescript
import { inspector2DelegatedAdminAccount } from '@cdktf/provider-aws'

new inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts">Inspector2DelegatedAdminAccountTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Inspector2DelegatedAdminAccountTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.inspector2DelegatedAdminAccount.Inspector2DelegatedAdminAccountTimeouts">Inspector2DelegatedAdminAccountTimeouts</a> | cdktf.IResolvable

---



