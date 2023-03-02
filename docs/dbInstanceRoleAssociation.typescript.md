# `dbInstanceRoleAssociation` Submodule <a name="`dbInstanceRoleAssociation` Submodule" id="@cdktf/provider-aws.dbInstanceRoleAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DbInstanceRoleAssociation <a name="DbInstanceRoleAssociation" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_instance_role_association aws_db_instance_role_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.Initializer"></a>

```typescript
import { dbInstanceRoleAssociation } from '@cdktf/provider-aws'

new dbInstanceRoleAssociation.DbInstanceRoleAssociation(scope: Construct, id: string, config: DbInstanceRoleAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociationConfig">DbInstanceRoleAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociationConfig">DbInstanceRoleAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.isConstruct"></a>

```typescript
import { dbInstanceRoleAssociation } from '@cdktf/provider-aws'

dbInstanceRoleAssociation.DbInstanceRoleAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.isTerraformElement"></a>

```typescript
import { dbInstanceRoleAssociation } from '@cdktf/provider-aws'

dbInstanceRoleAssociation.DbInstanceRoleAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.isTerraformResource"></a>

```typescript
import { dbInstanceRoleAssociation } from '@cdktf/provider-aws'

dbInstanceRoleAssociation.DbInstanceRoleAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.property.dbInstanceIdentifierInput">dbInstanceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.property.featureNameInput">featureNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.property.dbInstanceIdentifier">dbInstanceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.property.featureName">featureName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dbInstanceIdentifierInput`<sup>Optional</sup> <a name="dbInstanceIdentifierInput" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.property.dbInstanceIdentifierInput"></a>

```typescript
public readonly dbInstanceIdentifierInput: string;
```

- *Type:* string

---

##### `featureNameInput`<sup>Optional</sup> <a name="featureNameInput" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.property.featureNameInput"></a>

```typescript
public readonly featureNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `dbInstanceIdentifier`<sup>Required</sup> <a name="dbInstanceIdentifier" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.property.dbInstanceIdentifier"></a>

```typescript
public readonly dbInstanceIdentifier: string;
```

- *Type:* string

---

##### `featureName`<sup>Required</sup> <a name="featureName" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.property.featureName"></a>

```typescript
public readonly featureName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DbInstanceRoleAssociationConfig <a name="DbInstanceRoleAssociationConfig" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociationConfig.Initializer"></a>

```typescript
import { dbInstanceRoleAssociation } from '@cdktf/provider-aws'

const dbInstanceRoleAssociationConfig: dbInstanceRoleAssociation.DbInstanceRoleAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociationConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociationConfig.property.dbInstanceIdentifier">dbInstanceIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_role_association#db_instance_identifier DbInstanceRoleAssociation#db_instance_identifier}. |
| <code><a href="#@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociationConfig.property.featureName">featureName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_role_association#feature_name DbInstanceRoleAssociation#feature_name}. |
| <code><a href="#@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociationConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_role_association#role_arn DbInstanceRoleAssociation#role_arn}. |
| <code><a href="#@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_role_association#id DbInstanceRoleAssociation#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociationConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dbInstanceIdentifier`<sup>Required</sup> <a name="dbInstanceIdentifier" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociationConfig.property.dbInstanceIdentifier"></a>

```typescript
public readonly dbInstanceIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_role_association#db_instance_identifier DbInstanceRoleAssociation#db_instance_identifier}.

---

##### `featureName`<sup>Required</sup> <a name="featureName" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociationConfig.property.featureName"></a>

```typescript
public readonly featureName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_role_association#feature_name DbInstanceRoleAssociation#feature_name}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociationConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_role_association#role_arn DbInstanceRoleAssociation#role_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dbInstanceRoleAssociation.DbInstanceRoleAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_instance_role_association#id DbInstanceRoleAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



